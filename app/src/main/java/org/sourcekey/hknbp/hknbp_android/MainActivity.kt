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

import android.annotation.SuppressLint
import android.content.Context
import android.media.AudioManager
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.webkit.*
import android.app.Activity
import android.graphics.Color
import android.view.View.*
import android.view.View.OnSystemUiVisibilityChangeListener
import android.os.Build
import android.view.*
import android.widget.Button
import java.util.*
import android.os.AsyncTask
import androidx.core.content.ContextCompat


class MainActivity : AppCompatActivity() {
    val coreURL = "https://hknbp.org/"//"file:///android_asset/HKNBP_Core/index.html"
    val coreKotlinJSPath = "javascript:HKNBP_Core.org.sourcekey.hknbp.hknbp_core"
    val appVersion: String = "0.9-Android"
    lateinit var webView: WebView


    fun showSystemUI() {
        // Shows the system bars by removing all the flags
        // except for the ones that make the content appear under the system bars.
        window.decorView.systemUiVisibility = (
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE// or
                //View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                //View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        )
    }

    fun hideSystemUI() {
        // Enables regular immersive mode.
        // For "lean back" mode, remove SYSTEM_UI_FLAG_IMMERSIVE.
        // Or for "sticky immersive," replace it with SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        window.decorView.systemUiVisibility = (
                View.SYSTEM_UI_FLAG_IMMERSIVE or
                // Set the content to appear under the system bars so that the
                // content doesn't resize when the system bars hide and show.
                //View.SYSTEM_UI_FLAG_LAYOUT_STABLE or
                //View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                //View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or
                // Hide the nav bar and status bar
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION or
                View.SYSTEM_UI_FLAG_FULLSCREEN
        )
    }

    private var needShow = false
    private fun setSystemUIController(){
        android.os.Handler().postDelayed({
            if(needShow){showSystemUI()}else{hideSystemUI()}
            setSystemUIController()
        }, 1000)
    }

    @JavascriptInterface
    fun requestShowSystemUI(){
        needShow = true
    }

    @JavascriptInterface
    fun requestHideSystemUI(){
        needShow = false
    }

    @JavascriptInterface
    fun volumeUp() {
        val audio = getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_RAISE, AudioManager.FLAG_SHOW_UI)
    }

    @JavascriptInterface
    fun volumeDown(){
        val audio = getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_LOWER, AudioManager.FLAG_SHOW_UI)
    }

    @JavascriptInterface
    fun volumeMute(){
        val audio = getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_TOGGLE_MUTE, AudioManager.FLAG_SHOW_UI)
    }


    /**
     * 佢可以響全個APP做OnKey
     * 唔限某特定View
     * 唔使個個View去setOnKeyListener
     */
    override fun dispatchKeyEvent(keyEvent: KeyEvent): Boolean {
        if(keyEvent?.action == KeyEvent.ACTION_DOWN){
            //實體搖控初始化
            val remotePath = "${coreKotlinJSPath}.VirtualRemote"
            when (keyEvent.keyCode) {
                KeyEvent.KEYCODE_CHANNEL_UP             -> {webView.loadUrl("${remotePath}.nextChannelButton.click();")}
                KeyEvent.KEYCODE_CHANNEL_DOWN           -> {webView.loadUrl("${remotePath}.previousChannelButton.click();")}
                KeyEvent.KEYCODE_VOLUME_MUTE            -> {webView.loadUrl("${remotePath}.volumeMuteButton.click();")}
                KeyEvent.KEYCODE_VOLUME_UP              -> {webView.loadUrl("${remotePath}.volumeUpButton.click();")}
                KeyEvent.KEYCODE_VOLUME_DOWN            -> {webView.loadUrl("${remotePath}.volumeDownButton.click();")}
                KeyEvent.KEYCODE_MEDIA_AUDIO_TRACK      -> {webView.loadUrl("${remotePath}.nextAudioButton.click();")}
                KeyEvent.KEYCODE_CAPTIONS               -> {webView.loadUrl("${remotePath}.nextSubtitleButton.click();")}
                //KeyEvent.KEYCODE_DPAD_CENTER            -> {webView.loadUrl("${remotePath}.centerButton.click();")}
                //KeyEvent.KEYCODE_DPAD_UP                -> {webView.loadUrl("${remotePath}.upButton.click();")}
                //KeyEvent.KEYCODE_DPAD_DOWN              -> {webView.loadUrl("${remotePath}.downButton.click();")}
                //KeyEvent.KEYCODE_DPAD_LEFT              -> {webView.loadUrl("${remotePath}.leftButton.click();")}
                //KeyEvent.KEYCODE_DPAD_RIGHT             -> {webView.loadUrl("${remotePath}.rightButton.click();")}
                KeyEvent.KEYCODE_TV_TIMER_PROGRAMMING   -> {webView.loadUrl("${remotePath}.epgButton.click();")}
                KeyEvent.KEYCODE_GUIDE                  -> {webView.loadUrl("${remotePath}.epgButton.click();")}
                KeyEvent.KEYCODE_0                      -> {webView.loadUrl("${remotePath}.number0Button.click();")}
                KeyEvent.KEYCODE_1                      -> {webView.loadUrl("${remotePath}.number1Button.click();")}
                KeyEvent.KEYCODE_2                      -> {webView.loadUrl("${remotePath}.number2Button.click();")}
                KeyEvent.KEYCODE_3                      -> {webView.loadUrl("${remotePath}.number3Button.click();")}
                KeyEvent.KEYCODE_4                      -> {webView.loadUrl("${remotePath}.number4Button.click();")}
                KeyEvent.KEYCODE_5                      -> {webView.loadUrl("${remotePath}.number5Button.click();")}
                KeyEvent.KEYCODE_6                      -> {webView.loadUrl("${remotePath}.number6Button.click();")}
                KeyEvent.KEYCODE_7                      -> {webView.loadUrl("${remotePath}.number7Button.click();")}
                KeyEvent.KEYCODE_8                      -> {webView.loadUrl("${remotePath}.number8Button.click();")}
                KeyEvent.KEYCODE_9                      -> {webView.loadUrl("${remotePath}.number9Button.click();")}
                KeyEvent.KEYCODE_TV_MEDIA_CONTEXT_MENU  -> {webView.loadUrl("${remotePath}.menuButton.click();")}
                KeyEvent.KEYCODE_TV_CONTENTS_MENU       -> {webView.loadUrl("${remotePath}.menuButton.click();")}
                KeyEvent.KEYCODE_INFO                   -> {webView.loadUrl("${remotePath}.tvChannelDescriptionButton.click();")}
                KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION   -> {webView.loadUrl("${remotePath}.audioDescriptionButton.click();")}
                KeyEvent.KEYCODE_PROG_RED               -> {webView.loadUrl("${remotePath}.programmableRedButton.click();")}
                KeyEvent.KEYCODE_PROG_GREEN             -> {webView.loadUrl("${remotePath}.programmableGreenButton.click();")}
                KeyEvent.KEYCODE_PROG_YELLOW            -> {webView.loadUrl("${remotePath}.programmableYellowButton.click();")}
                KeyEvent.KEYCODE_PROG_BLUE              -> {webView.loadUrl("${remotePath}.programmableBlueButton.click();")}
                KeyEvent.KEYCODE_LAST_CHANNEL           -> {webView.loadUrl("${remotePath}.lastTimeChannelButton.click();")}
                KeyEvent.KEYCODE_WINDOW                 -> {/**畫中畫功能*/}
                else                                    -> {}
            }
        }
        return super.dispatchKeyEvent(keyEvent)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        hideSystemUI()
        setSystemUIController()

        if (Build.VERSION.SDK_INT >= 21) {
            getWindow().setNavigationBarColor(ContextCompat.getColor(this, R.color.background)) // Navigation bar the soft bottom of some phones like nexus and some Samsung note series
            getWindow().setStatusBarColor(ContextCompat.getColor(this,R.color.background)) //status bar or the time bar at the top
        }

        webView = findViewById(R.id.webView)
        webView.settings.javaScriptEnabled = true//設定同JavaScript互Call權限
        webView.settings.domStorageEnabled = true
        webView.settings.javaScriptCanOpenWindowsAutomatically = true//設定允許畀JavaScript彈另一個window
        webView.settings.allowFileAccessFromFileURLs = true
        webView.addJavascriptInterface(this, "HKNBP_Android")
        webView.loadUrl(coreURL)//"file:///android_asset/index.html"
        webView.settings.setPluginState(WebSettings.PluginState.ON)
        webView.settings.setPluginState(WebSettings.PluginState.ON_DEMAND)
        webView.settings.setUserAgentString("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36")//使用DesktopMode,YoutubeAPI需要DesktopMode先自動播放
        if(android.os.Build.VERSION.SDK_INT>16){webView.settings.setMediaPlaybackRequiresUserGesture(false)}//Vdieo自動播放
        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(webView: WebView, url: String) {
                super.onPageFinished(webView, url)

                //Set個Function落HKNBP_Core嘅JavaScript度畀佢之後可以Call返來執行某啲動作
                webView.loadUrl("${coreKotlinJSPath}.UserControlPanel.onShowUserControlPanel=function(){HKNBP_Android.requestShowSystemUI();};")
                webView.loadUrl("${coreKotlinJSPath}.UserControlPanel.onHideUserControlPanel=function(){HKNBP_Android.requestHideSystemUI();};")
                //隱藏全螢幕制
                //webView.loadUrl("${coreKotlinJSPath}.FullScreenButton.hide();")
                //虛擬搖控鍵設換
                webView.loadUrl("${coreKotlinJSPath}.player.volumeUp=function(){HKNBP_Android.volumeUp();};")
                webView.loadUrl("${coreKotlinJSPath}.player.volumeDown=function(){HKNBP_Android.volumeDown();};")
                //webView.loadUrl("${coreKotlinJSPath}.player.volumeMute=function(){HKNBP_Android.volumeMute();};")
                //話畀Core知個App係咩版本
                webView.loadUrl("${coreKotlinJSPath}.appVersion=${appVersion};")
            }

            /**
             * 當WebView Load唔到URL時
             * 呢舊野會被call
             *
            override fun onReceivedError(webView: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
            super.onReceivedError(webView, request, error)
            if(webView?.url == coreURL){
            webView?.loadUrl(coreURL)
            }
            }*/
        }
    }
}

