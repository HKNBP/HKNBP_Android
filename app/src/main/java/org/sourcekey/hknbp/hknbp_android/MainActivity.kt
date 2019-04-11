package org.sourcekey.hknbp.hknbp_android

import android.annotation.SuppressLint
import android.content.Context
import android.media.AudioManager
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.KeyEvent
import android.view.View
import android.webkit.*
import android.view.MotionEvent
import android.app.Activity
import android.view.View.*
import android.view.View.OnSystemUiVisibilityChangeListener
import android.os.Build
import android.widget.Button
import java.util.*


class MainActivity : AppCompatActivity() {
    val coreRoot = "http://hknbp.org/"//"file:///android_asset/HKNBP_Core/index.html"
    val coreKotlinJSPath = "javascript:HKNBP_Core.org.sourcekey.hknbp.hknbp_core"
    lateinit var webView: WebView

    //@SuppressLint("ClickableViewAccessibility")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        hideSystemUI()
        /**
        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener(object : OnClickListener{
        var isShow = false
        override fun onClick(v: View?) {
        if(isShow){
        hideSystemUI()
        }else{
        showSystemUI()
        }
        }
        })
         */

        webView = findViewById(R.id.webView)
        webView.settings.javaScriptEnabled = true//設定同JavaScript互Call權限
        webView.settings.domStorageEnabled = true
        webView.settings.javaScriptCanOpenWindowsAutomatically = true//設定允許畀JavaScript彈另一個window
        webView.settings.allowFileAccessFromFileURLs = true
        webView.addJavascriptInterface(this, "HKNBP_Android")
        webView.loadUrl(coreRoot)//"file:///android_asset/index.html"
        webView.settings.setPluginState(WebSettings.PluginState.ON)
        webView.settings.setPluginState(WebSettings.PluginState.ON_DEMAND)
        webView.settings.setUserAgentString("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36")//使用DesktopMode,YoutubeAPI需要DesktopMode先自動播放
        if(android.os.Build.VERSION.SDK_INT>16){webView.settings.setMediaPlaybackRequiresUserGesture(false)}//Vdieo自動播放
        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(webView: WebView, url: String) {
                super.onPageFinished(webView, url)

                //Set個Function落HKNBP_Core嘅JavaScript度畀佢之後可以Call返來執行某啲動作
                webView.loadUrl("${coreKotlinJSPath}.UserControlPanel.onShowUserControlPanel=function(){HKNBP_Android.showSystemUI();};")
                webView.loadUrl("${coreKotlinJSPath}.UserControlPanel.onHideUserControlPanel=function(){HKNBP_Android.hideSystemUI();};")
                //手提唔需要全螢幕制
                webView.loadUrl("${coreKotlinJSPath}.FullScreenButton.hide();")
                //虛擬搖控鍵設換
                webView.loadUrl("${coreKotlinJSPath}.player.volumeUp=function(){HKNBP_Android.volumeUp();};")
                webView.loadUrl("${coreKotlinJSPath}.player.volumeDown=function(){HKNBP_Android.volumeDown();};")
                webView.loadUrl("${coreKotlinJSPath}.player.volumeMute=function(){HKNBP_Android.volumeMute();};")
            }
            /**
            override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
                if (url.startsWith("file://")) {
                    // magic
                    return true
                }
                return false
            }

            override fun onReceivedError(webView: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                super.onReceivedError(webView, request, error)
                if(webView?.url == coreRoot){
                    webView?.loadUrl(coreRoot)
                }
            }*/
        }
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

    @JavascriptInterface
    fun hideSystemUI() {
        Log.v("屌", "h")
        // Enables regular immersive mode.
        // For "lean back" mode, remove SYSTEM_UI_FLAG_IMMERSIVE.
        // Or for "sticky immersive," replace it with SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        window.decorView.systemUiVisibility = (View.SYSTEM_UI_FLAG_IMMERSIVE
                // Set the content to appear under the system bars so that the
                // content doesn't resize when the system bars hide and show.
                or View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                // Hide the nav bar and status bar
                or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                or View.SYSTEM_UI_FLAG_FULLSCREEN)
    }

    // Shows the system bars by removing all the flags
    // except for the ones that make the content appear under the system bars.
    @JavascriptInterface
    fun showSystemUI() {
        Log.v("屌", "s")
        window.decorView.systemUiVisibility = (View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                or View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN)
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
}

