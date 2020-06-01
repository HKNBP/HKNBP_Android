/*
 * HKNBP_Android is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_Android is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_Android.  If not, see <https://www.gnu.org/licenses/>.
 */

package org.sourcekey.hknbp.hknbp_android

import android.view.InputDevice
import android.view.KeyEvent
import android.view.MotionEvent
import android.webkit.JavascriptInterface
import android.webkit.WebView

class HknbpCoreKeyEvent(val webView: WebView): HknbpCoreLifecycle {

    private val javascriptInterfaceName = "HknbpAndroidKeyEvent"

    override fun dispatchGenericMotionEvent(event: MotionEvent, superFun: ()->Boolean): Boolean {
        if (event.source and InputDevice.SOURCE_DPAD != InputDevice.SOURCE_DPAD) {
            // Use the hat axis value to find the D-pad direction
            val xaxis: Float = event.getAxisValue(MotionEvent.AXIS_HAT_X)
            val yaxis: Float = event.getAxisValue(MotionEvent.AXIS_HAT_Y)
            when {
                // Check if the AXIS_HAT_X value is -1 or 1, and set the D-pad
                // LEFT and RIGHT direction accordingly.
                xaxis.compareTo(-1.0f) == 0 -> {webView.loadUrl("javascript:onAndroidKey(${KeyEvent.KEYCODE_DPAD_LEFT});")}
                xaxis.compareTo(1.0f) == 0  -> {webView.loadUrl("javascript:onAndroidKey(${KeyEvent.KEYCODE_DPAD_RIGHT});")}
                // Check if the AXIS_HAT_Y value is -1 or 1, and set the D-pad
                // UP and DOWN direction accordingly.
                yaxis.compareTo(-1.0f) == 0 -> {webView.loadUrl("javascript:onAndroidKey(${KeyEvent.KEYCODE_DPAD_UP});")}
                yaxis.compareTo(1.0f) == 0  -> {webView.loadUrl("javascript:onAndroidKey(${KeyEvent.KEYCODE_DPAD_DOWN});")}
                else -> {return superFun()}
            }
            return true
        }
        return superFun()
    }

    private var dispatchKeyEventSuperFun: (()->Boolean)? = null

    override fun dispatchKeyEvent(keyEvent: KeyEvent?, superFun: ()->Boolean): Boolean {
        //實體搖控初始化
        if(keyEvent?.action == KeyEvent.ACTION_DOWN){
            //設置SuperFun畀JS去Call(使未定義Key行返默認程序)
            dispatchKeyEventSuperFun = superFun
            //執行KeyCode
            webView.loadUrl("javascript:onAndroidKey(${keyEvent.keyCode});")
            return true
        }
        return superFun()
    }

    /**
     * 使未定義Key行返默認程序
     * */
    @JavascriptInterface fun onNotDefinedKey(){
        dispatchKeyEventSuperFun?.invoke()
    }

    override fun onPageFinished(webView: WebView, url: String){
        //將KeyEvent放置到Web內執行
        //因使用AndroidCode嘅dispatchKeyEvent()個Enter鍵會一撳就點擊兩次(以下方法已解決)
        //同埋要試下咁樣可唔可以通過到PlayStore嘅Dpad功能認證(之前試過多種方法都未能成功上架)
        webView.loadUrl("""javascript:
            function onAndroidKey(keyCode){
                switch(keyCode) {
                    case ${KeyEvent.KEYCODE_DPAD_CENTER}:           hknbpRemote.centerButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_UP}:               hknbpRemote.upButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_DOWN}:             hknbpRemote.downButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_LEFT}:             hknbpRemote.leftButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_RIGHT}:            hknbpRemote.rightButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_UP_LEFT}:          hknbpRemote.upButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_UP_RIGHT}:         hknbpRemote.upButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_DOWN_LEFT}:        hknbpRemote.downButton.click(); break;
                    case ${KeyEvent.KEYCODE_DPAD_DOWN_RIGHT}:       hknbpRemote.downButton.click(); break;
                    case ${KeyEvent.KEYCODE_CHANNEL_UP}:            hknbpRemote.nextChannelButton.click(); break;
                    case ${KeyEvent.KEYCODE_CHANNEL_DOWN}:          hknbpRemote.previousChannelButton.click(); break;
                    case ${KeyEvent.KEYCODE_VOLUME_UP}:             hknbpRemote.volumeUpButton.click(); break;
                    case ${KeyEvent.KEYCODE_VOLUME_DOWN}:           hknbpRemote.volumeDownButton.click(); break;
                    case ${KeyEvent.KEYCODE_VOLUME_MUTE}:           hknbpRemote.volumeMuteButton.click(); break;
                    case ${KeyEvent.KEYCODE_MEDIA_AUDIO_TRACK}:     hknbpRemote.nextAudioButton.click(); break;
                    case ${KeyEvent.KEYCODE_CAPTIONS}:              hknbpRemote.nextSubtitleButton.click(); break;
                    case ${KeyEvent.KEYCODE_TV_TIMER_PROGRAMMING}:  hknbpRemote.epgButton.click(); break;
                    case ${KeyEvent.KEYCODE_GUIDE}:                 hknbpRemote.epgButton.click(); break;
                    case ${KeyEvent.KEYCODE_0}:                     hknbpRemote.number0Button.click(); break;
                    case ${KeyEvent.KEYCODE_1}:                     hknbpRemote.number1Button.click(); break;
                    case ${KeyEvent.KEYCODE_2}:                     hknbpRemote.number2Button.click(); break;
                    case ${KeyEvent.KEYCODE_3}:                     hknbpRemote.number3Button.click(); break;
                    case ${KeyEvent.KEYCODE_4}:                     hknbpRemote.number4Button.click(); break;
                    case ${KeyEvent.KEYCODE_5}:                     hknbpRemote.number5Button.click(); break;
                    case ${KeyEvent.KEYCODE_6}:                     hknbpRemote.number6Button.click(); break;
                    case ${KeyEvent.KEYCODE_7}:                     hknbpRemote.number7Button.click(); break;
                    case ${KeyEvent.KEYCODE_8}:                     hknbpRemote.number8Button.click(); break;
                    case ${KeyEvent.KEYCODE_9}:                     hknbpRemote.number9Button.click(); break;
                    case ${KeyEvent.KEYCODE_MINUS}:                 hknbpRemote.minusButton.click(); break;
                    case ${KeyEvent.KEYCODE_TV_MEDIA_CONTEXT_MENU}: hknbpRemote.menuButton.click(); break;
                    case ${KeyEvent.KEYCODE_TV_CONTENTS_MENU}:      hknbpRemote.menuButton.click(); break;
                    case ${KeyEvent.KEYCODE_INFO}:                  hknbpRemote.tvChannelDescriptionButton.click(); break;
                    case ${KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION}:  hknbpRemote.audioDescriptionButton.click(); break;
                    case ${KeyEvent.KEYCODE_PROG_RED}:              hknbpRemote.programmableRedButton.click(); break;
                    case ${KeyEvent.KEYCODE_PROG_GREEN}:            hknbpRemote.programmableGreenButton.click(); break;
                    case ${KeyEvent.KEYCODE_PROG_YELLOW}:           hknbpRemote.programmableYellowButton.click(); break;
                    case ${KeyEvent.KEYCODE_PROG_BLUE}:             hknbpRemote.programmableBlueButton.click(); break;
                    case ${KeyEvent.KEYCODE_LAST_CHANNEL}:          hknbpRemote.lastTimeChannelButton.click(); break;
                    case ${KeyEvent.KEYCODE_WINDOW}:                /**畫中畫功能(後補)**/ break;
                    case ${KeyEvent.KEYCODE_BACK}:                  /****/ break;
                    default:                                        hknbpPrompt("本程式並無此功能提供"+keyCode);${javascriptInterfaceName}.onNotDefinedKey(); break;
                }
            }
        """)
    }

    init {
        webView.addJavascriptInterface(this, javascriptInterfaceName)//加個[值]到JS被JS去AndroidCode
    }
}