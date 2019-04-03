/*
 * HKNBP_Core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_Core is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_Core.  If not, see <https://www.gnu.org/licenses/>.
 */

package org.sourcekey.hknbp.hknbp_core

import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window

class Player(private val tvChannel: TVChannel) {
    private val iframePlayer: dynamic = document.getElementById("iframePlayer")
    private val watchingCounter: WatchingCounter = WatchingCounter(tvChannel)

    /**
     * 片源表
     *
     * 由於唔能夠響主線程攞個表返來
     * 所以此值會設定響iframePlayer Load好個頻道之後
     * 先初始化此值
     * */
    var videoTracks: ArrayLinkList<TrackDescription> = ArrayLinkList(TrackDescription(-5, "-------"))
        private set

    /**
     * 聲道表
     *
     * 由於唔能夠響主線程攞個表返來
     * 所以此值會設定響iframePlayer Load好個頻道之後
     * 先初始化此值
     * */
    var audioTracks: ArrayLinkList<TrackDescription> = ArrayLinkList(TrackDescription(-5, "-------"))
        private set

    /**
     * 字幕表
     *
     * 由於唔能夠響主線程攞個表返來
     * 所以此值會設定響iframePlayer Load好個頻道之後
     * 先初始化此值
     * */
    var subtitleTracks: ArrayLinkList<TrackDescription> = ArrayLinkList(TrackDescription(-5, "-------"))
        private set

    /**
     * 確保音量值已設定Timer
     *
     * 由於當值向IframePlayer進行設定後
     * 會執行一啲同<音量值>有關嘅野
     * 如果呢度個<音量值>同IframePlayer個<音量值>唔會
     * 有可能出現一啲BUG
     * */
    private var makeSureIframePlayerVolumeValueIsChangedTimer = 0
        set(value) {
            window.clearInterval(field)//清除先前Timer避免重複
            field = value
        }

    /**
     * 音量
     *
     * 當get()會直接去iframePlayer度攞音量資訊
     * 當set()會直接設定iframePlayer嘅音量
     * 呢度個<值>可以話冇用
     * 順水設個值可以畀其他地方容易get()同set()
     * var volume: Double 等於 100.0 <- 係冇意思,順水初始化之用
     *
     * 注:音量值用Double原因係因為有啲IframePlayer嘅音量值有小數
     * 小數中有取捨使到有機會調教唔到音量值
     * */
    var volume: Double = 100.0
        get() {
            return iframePlayer.contentWindow.onGetIframePlayerVolume().toString().toDoubleOrNull()?:100.0
        }
        set(value) {
            val script = fun(){
                iframePlayer.contentWindow.onSetIframePlayerVolume(value)
                var v = value
                if(100 < v){v = 100.0}
                if(v < 0){v = 0.0}
                if(volume == v){
                    window.clearInterval(makeSureIframePlayerVolumeValueIsChangedTimer)
                    localStorage.setItem("RecentlyVolume", field.toString())//儲存低返最近設定音量
                    field = v
                }
                for(event in onPlayerEvents){ event.on(OnPlayerEvent.volumeChanged) }
            }
            script()
            makeSureIframePlayerVolumeValueIsChangedTimer = window.setInterval(script, 200)
        }

    /**
     * 確保靜音值已設定Timer
     *
     * 由於當值向IframePlayer進行設定後
     * 會執行一啲同<靜音值>有關嘅野
     * 如果呢度個<靜音值>同IframePlayer個<靜音值>唔會
     * 有可能出現一啲BUG
     * */
    private var makeSureIframePlayerMutedValueIsChangedTimer = 0
        set(value) {
            window.clearInterval(field)//清除先前Timer避免重複
            field = value
        }

    /**
     * 靜音
     *
     * 當get()會直接去iframePlayer度攞靜音資訊
     * 當set()會直接設定iframePlayer嘅靜音
     * 呢度個<值>可以話冇用
     * 順水設個值可以畀其他地方容易get()同set()
     * var volume: Boolean 等於 false <- 係冇意思,順水初始化之用
     * */
    var muted: Boolean = false
        get() {
            return iframePlayer.contentWindow.onGetIframePlayerMuted().toString().toBoolean()
        }
        set(value) {
            val script = fun(){
                iframePlayer.contentWindow.onSetIframePlayerMuted(value)
                if(muted == value){
                    window.clearInterval(makeSureIframePlayerMutedValueIsChangedTimer)
                    field = value
                }
                for(event in onPlayerEvents){ event.on(OnPlayerEvent.mutedChanged) }
            }
            script()
            makeSureIframePlayerMutedValueIsChangedTimer = window.setInterval(script, 200)
        }

    enum class OnPlayerEvent{
        playing,
        notPlaying,
        videoTrackChanged,
        audioTrackChanged,
        subtitleTrackChanged,
        volumeChanged,
        mutedChanged
    }

    interface OnPlayerEventListener{
        fun on(onPlayerEvent: OnPlayerEvent)
    }

    private var onPlayerEvents: ArrayList<OnPlayerEventListener> = ArrayList()

    fun addOnPlayerEventListener(onPlayerEventListener: OnPlayerEventListener) {
        onPlayerEvents.add(onPlayerEventListener)
    }

    /**
     * 當iframePlayer開始播放頻道時
     * 會執行此function
     * 即iframePlayer正確地播放緊
     * 有關資料可讀取
     * */
    private fun onPlaying(){
        try{
            videoTracks = TrackDescription.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions(
                    iframePlayer.contentWindow.onGetIframePlayerVideoTracks(),
                    iframePlayer.contentWindow.onGetIframePlayerVideoTrack()
            )
            videoTracks.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<TrackDescription> {
                override fun OnNodeIDChanged(preChangeNodeID: Int?, postChangeNodeID: Int?, preChangeNode: TrackDescription?, postChangeNode: TrackDescription?) {
                    iframePlayer.contentWindow.onSetIframePlayerVideoTrack(postChangeNode)
                    localStorage.setItem("RecentlyChannel${tvChannel.number}VideoTrackID", postChangeNodeID.toString())
                    for(event in onPlayerEvents){ event.on(OnPlayerEvent.videoTrackChanged) }
                }
            })
            videoTracks.designated(
                    localStorage.getItem("RecentlyChannel${tvChannel.number}VideoTrackID")?.toIntOrNull()?:0
            )
        }catch (e: dynamic) {
            println("頻道響iframe程序未行完好 或者 Get唔到片源資訊: "+e.toString())
            videoTracks = ArrayLinkList(TrackDescription(-5, "-------"))
        }

        try{
            audioTracks = TrackDescription.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions(
                    iframePlayer.contentWindow.onGetIframePlayerAudioTracks(),
                    iframePlayer.contentWindow.onGetIframePlayerAudioTrack()
            )
            audioTracks.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<TrackDescription> {
                override fun OnNodeIDChanged(preChangeNodeID: Int?, postChangeNodeID: Int?, preChangeNode: TrackDescription?, postChangeNode: TrackDescription?) {
                    iframePlayer.contentWindow.onSetIframePlayerAudioTrack(postChangeNode)
                    localStorage.setItem("RecentlyChannel${tvChannel.number}AudioTrackID", postChangeNodeID.toString())
                    for(event in onPlayerEvents){ event.on(OnPlayerEvent.audioTrackChanged) }
                }
            })
            audioTracks.designated(
                    localStorage.getItem("RecentlyChannel${tvChannel.number}AudioTrackID")?.toIntOrNull()?:0
            )
        }catch (e: dynamic) {
            println("頻道響iframe程序未行完好 或者 Get唔到聲道資訊: "+e.toString())
            audioTracks = ArrayLinkList(TrackDescription(-5, "-------"))
        }

        try{
            subtitleTracks = TrackDescription.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions(
                    iframePlayer.contentWindow.onGetIframePlayerSubtitleTracks(),
                    iframePlayer.contentWindow.onGetIframePlayerSubtitleTrack()
            )
            subtitleTracks.addOnNodeEventListener(object : ArrayLinkList.OnNodeEventListener<TrackDescription> {
                override fun OnNodeIDChanged(preChangeNodeID: Int?, postChangeNodeID: Int?, preChangeNode: TrackDescription?, postChangeNode: TrackDescription?) {
                    iframePlayer.contentWindow.onSetIframePlayerSubtitleTrack(postChangeNode)
                    localStorage.setItem("RecentlyChannel${tvChannel.number}SubtitleTrackID", postChangeNodeID.toString())
                    for(event in onPlayerEvents){ event.on(OnPlayerEvent.subtitleTrackChanged) }
                }
            })
            subtitleTracks.designated(
                    localStorage.getItem("RecentlyChannel${tvChannel.number}SubtitleTrackID")?.toIntOrNull()?:0
            )
        }catch (e: dynamic) {
            println("頻道響iframe程序未行完好 或者 Get唔到字幕資訊 或者 頻道冇字幕: "+e.toString())
            subtitleTracks = ArrayLinkList(TrackDescription(-5, "-------"))
        }

        try{
            //讀取最近設定音量再去設定IframePlayer音量
            iframePlayer.contentWindow.onSetIframePlayerVolume(
                    localStorage.getItem("RecentlyVolume")?.toDoubleOrNull()?:100.0
            )
        }catch (e: dynamic) {println("頻道響iframe程序未行完好 或者 Get唔到音量資訊: "+e.toString())}

        try{
            /**
             * 如果依家呢個Player唔係第1個Player
             * 即可以唔使 靜音播放
             *
             * 因依家大部分 <瀏覽器> 唔畀自動播放
             * 如果要自動播放一定要將Player設為 <靜音>
             * */
            if(1 < indexOfPlayer){
                muted = false
            }else{
                Modernizr.checkVideoAutoPlay(
                        fun(){ muted = false },
                        fun(){ muted = true }
                )
            }
        }catch (e: dynamic) {println("頻道響iframe程序未行完好 或者 Get唔到靜音資訊: "+e.toString())}

        for(event in onPlayerEvents){ event.on(OnPlayerEvent.playing) }
    }

    /**
     * 當iframePlayer冇進行播放頻道時
     * 會執行此function
     * */
    private fun onNotPlaying(){
        for(event in onPlayerEvents){ event.on(OnPlayerEvent.notPlaying) }
    }

    /******************************************************************************************************************/
    /**
    /**
     * 設定為最高畫質片源
    */
    private fun setHighestVideoQuality() {
    //designatedVideoTrack(getVideoTracks().size - 1)
    //updateVideoTrack()
    }

    /**
     * 設定為最低畫質片源
    */
    private fun setLowestVideoQuality() {
    //designatedVideoTrack(1)//因第0片源為冇畫面影片,所以第1片源先至係最低畫質
    //updateVideoTrack()
    }

    /**
     * 設定為自動選擇畫質片源
    */
    private fun setAutoSelectVideoQuality() {
    //designatedVideoTrack(-1)//-1為自動選擇畫質片源
    //updateVideoTrack()
    }
     */

    /**
     * 去依家嘅片源嘅下一個片源
     */
    fun nextVideoTrack() {
        player.videoTracks.next()
    }

    /**
     * 去依家嘅片源嘅上一個片源
     */
    fun previousVideoTrack() {
        player.videoTracks.previous()
    }

    /**
     * 去特定片源
     * @param videoTrackID 要轉去片源ID
     */
    @JsName("designatedVideoTrack") fun designatedVideoTrack(videoTrackID: Int): Boolean {
        val videoTracksNodeID = TrackDescription.toTracksNodeID(player.videoTracks, videoTrackID)

        if (videoTracksNodeID != null) {
            player.videoTracks.designated(videoTracksNodeID)
            return true
        } else {
            Dialogue.getDialogues(fun(dialogues) {
                PromptBox.promptMessage(dialogues.node?.canNotFind ?: "")
            })
            return false
        }
    }


    /**
     * 去依家嘅聲道嘅下一個聲道
     */
    fun nextAudioTrack() {
        player.audioTracks.next()
    }

    /**
     * 去依家嘅聲道嘅上一個聲道
     */
    fun previousAudioTrack() {
        player.audioTracks.previous()
    }

    /**
     * 去特定聲道
     * @param audioTrackID 要轉去聲道ID
     */
    @JsName("designatedAudioTrack") fun designatedAudioTrack(audioTrackID: Int): Boolean {
        val audioTracksNodeID = TrackDescription.toTracksNodeID(player.audioTracks, audioTrackID)

        if (audioTracksNodeID != null) {
            player.audioTracks.designated(audioTracksNodeID)
            return true
        } else {
            Dialogue.getDialogues(fun(dialogues) {
                PromptBox.promptMessage(dialogues.node?.canNotFind ?: "")
            })
            return false
        }
    }


    /**
     * 去依家嘅字幕嘅下一個字幕
     */
    fun nextSubtitleTrack() {
        player.subtitleTracks.next()
    }

    /**
     * 去依家嘅字幕嘅上一個字幕
     */
    fun previousSubtitleTrack() {
        player.subtitleTracks.previous()
    }

    /**
     * 去特定字幕
     * @param subtitleTrackID 要轉去字幕ID
     */
    @JsName("designatedSubtitleTrack") fun designatedSubtitleTrack(subtitleTrackID: Int): Boolean {
        val subtitleTracksNodeID = TrackDescription.toTracksNodeID(player.subtitleTracks, subtitleTrackID)

        if (subtitleTracksNodeID != null) {
            player.subtitleTracks.designated(subtitleTracksNodeID)
            return true
        } else {
            Dialogue.getDialogues(fun(dialogues) {
                PromptBox.promptMessage(dialogues.node?.canNotFind ?: "")
            })
            return false
        }
    }

    /******************************************************************************************************************/
    /**
     * 提升音量
     *
     * 由於其他平台需要其他位置設置提升音量
     * 因此此值可被修改成學合其他平台嘅程序
     * @returns Double 現在音量
     * */
    var volumeUp = fun(): Double{
        player.volume = player.volume + 1.0
        return player.volume
    }

    /**
     * 降底音量
     *
     * 由於其他平台需要其他位置設置降底音量
     * 因此此值可被修改成學合其他平台嘅程序
     * @returns Double 現在音量
     * */
    var volumeDown = fun(): Double{
        player.volume = player.volume - 1.0
        return player.volume
    }

    /**
     * 設換靜音
     *
     * Call一次靜音,再Call取消靜音
     * 由於其他平台需要其他位置設置設換靜音
     * 因此此值可被修改成學合其他平台嘅程序
     * */
    var volumeMute = fun(){
        player.muted = !player.muted
    }

    /******************************************************************************************************************/
    /**
     * programmable鍵 嘅功能
     * @param color 咩野顏色嘅programmable鍵
     */
    @JsName("programmable") fun programmable(color: ProgrammableColor) {
        ///////////////////////////////////
    }

    /**
     *
     * */
    fun enableProgrammable(){

    }

    /**
     *
     * */
    fun disableProgrammable(){

    }

    /**
     *
     * */
    enum class ProgrammableColor {
        red,
        green,
        yellow,
        blue
    }

    /******************************************************************************************************************/
    init {
        indexOfPlayer++

        iframePlayer.src = tvChannel.sources.node?.iFramePlayerSrc ?: "iframePlayer/videojs_hls.html"
        iframePlayer.onload = fun(){
            try {
                iframePlayer.contentWindow.onIframePlayerPlaying = fun(){ onPlaying() }
                iframePlayer.contentWindow.onIframePlayerNotPlaying = fun(){ onNotPlaying() }
                iframePlayer.contentWindow.onIframePlayerInit(
                        tvChannel.sources.node?.link?:
                        "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
                )
            } catch (e: dynamic){ println("iframePlayer有啲Function搵唔到或發生問題: $e") }
        }
    }

    companion object {
        /**
         * 第幾個Player
         *
         * 用作畀其他Player知道自己係米第1個Player
         * 為左如果觀眾已經轉左台一次
         * 下一個台就唔再 <靜音>
         * 因依家大部分 <瀏覽器> 唔畀自動播放
         * 如果要自動播放一定要將Player設為 <靜音>
         * */
        var indexOfPlayer = 0
            set(value) {
                val index = if(2<value){2}else{value}
                field = index
            }
    }
}