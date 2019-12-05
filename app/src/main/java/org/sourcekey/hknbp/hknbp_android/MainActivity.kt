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

import android.app.AlertDialog
import android.app.UiModeManager
import android.content.ActivityNotFoundException
import android.content.Context
import android.content.DialogInterface
import android.content.Intent
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.media.AudioManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.KeyEvent
import android.view.View
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity


class MainActivity : AppCompatActivity() {
    val coreURL = "https://hknbp.org/" //"http://192.168.0.169:8000"//"https://hknbp.org/"//"file:///android_asset/HKNBP_Core/index.html"
    val corePath = "HKNBP_Core.org.sourcekey.hknbp.hknbp_core"
    val coreKotlinJSPath = "javascript:${corePath}"
    val appVersion = "v${BuildConfig.VERSION_CODE}-Android"
    val webViewPackageName = "com.google.android.webview"
    val firefoxPackageName = "org.mozilla.firefox"
    val mainActivity: MainActivity = this
    var webView: WebView? = null

    val remotePath = "${coreKotlinJSPath}.VirtualRemote"

    /**
     * 佢可以響全個APP做OnKey
     * 唔限某特定View
     * 唔使個個View去setOnKeyListener
     */
    override fun dispatchKeyEvent(keyEvent: KeyEvent?): Boolean {
        //由於有時未能跟HTML嘅autofocus去先Focus一個位置
        webView?.loadUrl("""javascript:
            if($(":focus").parents("#body").length){}else{
                document.getElementById("userControlPanelShower").focus();
            }
        """)
        //實體搖控初始化
        if(keyEvent?.action == KeyEvent.ACTION_DOWN){
            when (keyEvent.keyCode) {
                KeyEvent.KEYCODE_CHANNEL_UP             -> {webView?.loadUrl("${remotePath}.nextChannelButton.click();")}
                KeyEvent.KEYCODE_CHANNEL_DOWN           -> {webView?.loadUrl("${remotePath}.previousChannelButton.click();")}
                KeyEvent.KEYCODE_VOLUME_MUTE            -> {webView?.loadUrl("${remotePath}.volumeMuteButton.click();")}
                KeyEvent.KEYCODE_VOLUME_UP              -> {webView?.loadUrl("${remotePath}.volumeUpButton.click();")}
                KeyEvent.KEYCODE_VOLUME_DOWN            -> {webView?.loadUrl("${remotePath}.volumeDownButton.click();")}
                KeyEvent.KEYCODE_MEDIA_AUDIO_TRACK      -> {webView?.loadUrl("${remotePath}.nextAudioButton.click();")}
                KeyEvent.KEYCODE_CAPTIONS               -> {webView?.loadUrl("${remotePath}.nextSubtitleButton.click();")}
                KeyEvent.KEYCODE_DPAD_CENTER            -> {/*webView?.loadUrl("${remotePath}.centerButton.click();")*/}
                KeyEvent.KEYCODE_DPAD_UP                -> {/*webView?.loadUrl("${remotePath}.upButton.click();")*/}
                KeyEvent.KEYCODE_DPAD_DOWN              -> {/*webView?.loadUrl("${remotePath}.downButton.click();")*/}
                KeyEvent.KEYCODE_DPAD_LEFT              -> {/*webView?.loadUrl("${remotePath}.leftButton.click();")*/}
                KeyEvent.KEYCODE_DPAD_RIGHT             -> {/*webView?.loadUrl("${remotePath}.rightButton.click();")*/}
                KeyEvent.KEYCODE_TV_TIMER_PROGRAMMING   -> {webView?.loadUrl("${remotePath}.epgButton.click();")}
                KeyEvent.KEYCODE_GUIDE                  -> {webView?.loadUrl("${remotePath}.epgButton.click();")}
                KeyEvent.KEYCODE_0                      -> {webView?.loadUrl("${remotePath}.number0Button.click();")}
                KeyEvent.KEYCODE_1                      -> {webView?.loadUrl("${remotePath}.number1Button.click();")}
                KeyEvent.KEYCODE_2                      -> {webView?.loadUrl("${remotePath}.number2Button.click();")}
                KeyEvent.KEYCODE_3                      -> {webView?.loadUrl("${remotePath}.number3Button.click();")}
                KeyEvent.KEYCODE_4                      -> {webView?.loadUrl("${remotePath}.number4Button.click();")}
                KeyEvent.KEYCODE_5                      -> {webView?.loadUrl("${remotePath}.number5Button.click();")}
                KeyEvent.KEYCODE_6                      -> {webView?.loadUrl("${remotePath}.number6Button.click();")}
                KeyEvent.KEYCODE_7                      -> {webView?.loadUrl("${remotePath}.number7Button.click();")}
                KeyEvent.KEYCODE_8                      -> {webView?.loadUrl("${remotePath}.number8Button.click();")}
                KeyEvent.KEYCODE_9                      -> {webView?.loadUrl("${remotePath}.number9Button.click();")}
                KeyEvent.KEYCODE_TV_MEDIA_CONTEXT_MENU  -> {webView?.loadUrl("${remotePath}.menuButton.click();")}
                KeyEvent.KEYCODE_TV_CONTENTS_MENU       -> {webView?.loadUrl("${remotePath}.menuButton.click();")}
                KeyEvent.KEYCODE_INFO                   -> {webView?.loadUrl("${remotePath}.tvChannelDescriptionButton.click();")}
                KeyEvent.KEYCODE_TV_AUDIO_DESCRIPTION   -> {webView?.loadUrl("${remotePath}.audioDescriptionButton.click();")}
                KeyEvent.KEYCODE_PROG_RED               -> {webView?.loadUrl("${remotePath}.programmableRedButton.click();")}
                KeyEvent.KEYCODE_PROG_GREEN             -> {webView?.loadUrl("${remotePath}.programmableGreenButton.click();")}
                KeyEvent.KEYCODE_PROG_YELLOW            -> {webView?.loadUrl("${remotePath}.programmableYellowButton.click();")}
                KeyEvent.KEYCODE_PROG_BLUE              -> {webView?.loadUrl("${remotePath}.programmableBlueButton.click();")}
                KeyEvent.KEYCODE_LAST_CHANNEL           -> {webView?.loadUrl("${remotePath}.lastTimeChannelButton.click();")}
                KeyEvent.KEYCODE_WINDOW                 -> {/**畫中畫功能*/}
                KeyEvent.KEYCODE_BACK                   -> {}
                else                                    -> {webView?.loadUrl("${coreKotlinJSPath}.PromptBox.promptMessage(\"本程式並無此功能提供${keyEvent.keyCode}\");")}
            }
        }
        return super.dispatchKeyEvent(keyEvent)
    }

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

    private var isNeedShow = false
    private fun setSystemUIController(){
        android.os.Handler().postDelayed({
            setSystemUIController()
            if(isNeedShow){showSystemUI()}else{hideSystemUI()}
        }, 1000)
    }

    @JavascriptInterface fun requestSystemUI(isShow: String){
        isNeedShow = isShow.toBoolean()
    }

    @JavascriptInterface fun volumeUp(){
        val audio = getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_RAISE, AudioManager.FLAG_SHOW_UI)
    }

    @JavascriptInterface fun volumeDown(){
        val audio = getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_LOWER, AudioManager.FLAG_SHOW_UI)
    }

    @JavascriptInterface fun volumeMute(){
        val audio = getSystemService(Context.AUDIO_SERVICE) as AudioManager
        audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_TOGGLE_MUTE, AudioManager.FLAG_SHOW_UI)
    }

    private var isCoreLoaded = false
    private fun setCheckCoreLoaded(){
        android.os.Handler().postDelayed({
            setCheckCoreLoaded()
            if(!isCoreLoaded){webView?.loadUrl(coreURL)}
        }, 60000)
    }

    @JavascriptInterface fun returnCoreStatus(isLoaded: String){
        isCoreLoaded = isLoaded.toBoolean()
    }

    fun createUpdateAlertByGooglePlayStore(
        title: String?,
        message: String?,
        button: Boolean,
        appPackageName: String
    ){
        val alertDialog: AlertDialog = AlertDialog.Builder(this).create()
        alertDialog.setTitle(title)
        alertDialog.setMessage(message)
        if (button == true) {
            alertDialog.setButton("Download Now",
                DialogInterface.OnClickListener { arg0, arg1 ->
                    try {
                        val browserIntent = Intent(
                            Intent.ACTION_VIEW,
                            Uri.parse("market://details?id=$appPackageName")
                        )
                        startActivity(browserIntent)
                    } catch (anfe: ActivityNotFoundException) {
                        val browserIntent = Intent(
                            Intent.ACTION_VIEW,
                            Uri.parse("https://play.google.com/store/apps/details?id=$appPackageName")
                        )
                        startActivity(browserIntent)
                    }
                })
        }
        alertDialog.show()
    }

    fun initWebView(){
        try {
            val webViewVersion = packageManager.getPackageInfo(webViewPackageName, 0).versionName
            if(51 <= webViewVersion.split(".").getOrNull(0)?.toIntOrNull()?:0){//支援ES6嘅版本
                //設置WebView
                webView = findViewById(R.id.webView)
                //Log.i("WebView", webView?.getSettings()?.getUserAgentString())
                webView?.settings?.domStorageEnabled = true
                webView?.settings?.javaScriptCanOpenWindowsAutomatically = true//設定允許畀JavaScript彈另一個window
                webView?.settings?.allowFileAccessFromFileURLs = true
                webView?.settings?.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK)//開啟離線網頁功能,為之後上唔到個網都可以用到
                webView?.settings?.javaScriptEnabled = true//設定同JavaScript互Call權限
                webView?.addJavascriptInterface(this, "HKNBP_Android")
                webView?.settings?.setPluginState(WebSettings.PluginState.ON)
                webView?.settings?.setPluginState(WebSettings.PluginState.ON_DEMAND)
                webView?.settings?.setUserAgentString("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36")//使用DesktopMode,YoutubeAPI需要DesktopMode先自動播放
                if(Build.VERSION.SDK_INT>16){webView?.settings?.setMediaPlaybackRequiresUserGesture(false)}//Video自動播放
                var progressDialogSimplify: ProgressDialogSimplify? = null
                webView?.webChromeClient = object : WebChromeClient() {
                    override fun onProgressChanged(webView: WebView, progress: Int) {
                        if(webView?.url == coreURL){
                            //新增ProgressDialog
                            if(progressDialogSimplify == null){
                                progressDialogSimplify = ProgressDialogSimplify(
                                    mainActivity,
                                    getResources().getString(R.string.loaded)
                                )
                            }
                            //更新ProgressDialog顯示載入進度
                            progressDialogSimplify?.change(webView?.progress)
                        }
                    }
                }
                webView?.webViewClient = object : WebViewClient() {
                    private fun checkCoreIsLoaded(webView: WebView?){
                        if(webView?.url == coreURL){
                            webView?.loadUrl("""javascript:
                        try{
                            if(${corePath}){
                                HKNBP_Android.returnCoreStatus(true);
                            }else{
                                HKNBP_Android.returnCoreStatus(false);
                            }
                        }catch(e){
                            HKNBP_Android.returnCoreStatus(false);
                        }
                    """)
                        }
                    }

                    override fun onPageFinished(webView: WebView, url: String) {
                        super.onPageFinished(webView, url)
                        //移除ProgressDialog
                        if(webView?.url == coreURL){ progressDialogSimplify?.remove() }
                        //Set個Function落HKNBP_Core嘅JavaScript度畀佢之後可以Call返來執行某啲動作
                        webView?.loadUrl("${coreKotlinJSPath}.UserControlPanel.onShowUserControlPanel=function(){HKNBP_Android.requestSystemUI(true);};")
                        webView?.loadUrl("${coreKotlinJSPath}.UserControlPanel.onHideUserControlPanel=function(){HKNBP_Android.requestSystemUI(false);};")
                        //虛擬搖控鍵設換
                        webView?.loadUrl("${coreKotlinJSPath}.Player.Companion.volumeUp=function(){HKNBP_Android.volumeUp();};")
                        webView?.loadUrl("${coreKotlinJSPath}.Player.Companion.volumeDown=function(){HKNBP_Android.volumeDown();};")
                        webView?.loadUrl("${coreKotlinJSPath}.Player.Companion.volumeMute=function(){HKNBP_Android.volumeMute();};")
                        //話畀Core知個App係咩版本
                        webView?.loadUrl("javascript:window.setTimeout(function(){${corePath}.appVersion=\"${appVersion}\";},0)")
                        //確保Core Load好
                        checkCoreIsLoaded(webView)
                    }

                    override fun onReceivedError(webView: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                        super.onReceivedError(webView, request, error)
                        //確保Core Load好
                        checkCoreIsLoaded(webView)
                        if(webView?.url == coreURL){
                            Toast.makeText(mainActivity, R.string.pleaseMakeSureTheDeviceIsConnectedToTheInternet, Toast.LENGTH_LONG).show()
                        }
                    }
                }
                webView?.loadUrl(coreURL)
            }else{
                createUpdateAlertByGooglePlayStore(
                    getResources().getString(R.string.needUpdateYourWebView),
                    getResources().getString(R.string.thisApplicationUseWebViewWithSupportES6),
                    true,
                    webViewPackageName
                )
            }
        } catch (e: Exception) {
            //Log.e("WebView", "Android System WebView is not found")
            createUpdateAlertByGooglePlayStore(
                getResources().getString(R.string.needInstallWebView),
                getResources().getString(R.string.pleaseInstallWebViewFromeGooglePlayStore),
                true,
                webViewPackageName
            )
        }
    }

    fun switchFirefoxRun(){
        try {
            val webViewVersion = packageManager.getPackageInfo(firefoxPackageName, 0).versionName
            Log.i("XXX", webViewVersion)
            if(68 <= webViewVersion.split(".").getOrNull(0)?.toIntOrNull()?:0){//68版本測試未發現有問題
                //使用Firefox開啟HKNBP
                val browserIntent = Intent(
                    Intent.ACTION_VIEW,
                    Uri.parse(coreURL)
                )
                browserIntent.setPackage(firefoxPackageName)
                startActivity(browserIntent)
            }else{
                createUpdateAlertByGooglePlayStore(
                    getResources().getString(R.string.needUpdateYourFirefox),
                    getResources().getString(R.string.thisApplicationUseFirefoxWithSupportES6),
                    true,
                    firefoxPackageName
                )
            }
        } catch (e: Exception) {
            //Log.e("WebView", "Android System WebView is not found")
            createUpdateAlertByGooglePlayStore(
                getResources().getString(R.string.needInstallFirefox),
                getResources().getString(R.string.pleaseInstallFirefoxFromeGooglePlayStore),
                true,
                firefoxPackageName
            )
        }
    }

    fun isDirectToTV(): Boolean{
        val uiModeManager = getSystemService(Context.UI_MODE_SERVICE) as UiModeManager
        return uiModeManager.currentModeType == Configuration.UI_MODE_TYPE_TELEVISION
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        hideSystemUI()

        setSystemUIController()
        setCheckCoreLoaded()

        if (21 <= Build.VERSION.SDK_INT) {
            getWindow().setNavigationBarColor(ContextCompat.getColor(this, R.color.background)) // Navigation bar the soft bottom of some phones like nexus and some Samsung note series
            getWindow().setStatusBarColor(ContextCompat.getColor(this,R.color.background)) //status bar or the time bar at the top
        }
    }

    override fun onResume() {
        super.onResume()

        //因Android5之前嘅WebView不能透過PlayStore更新
        //所以需要使用仲有為Android5之前嘅系統更新嘅瀏覽器運行HKNBP
        if(21 <= Build.VERSION.SDK_INT){
            webView?:initWebView()
        }else{
            switchFirefoxRun()
        }

        webView?.onResume()
        webView?.resumeTimers()
    }

    override fun onPause() {
        super.onPause()

        webView?.onPause()
        webView?.pauseTimers()
    }

    override fun onStop() {
        super.onStop()

        //由於AndroidTV唔知點解收埋左唔行onDestroy()但打開返又行onCreate()
        //而呢個情況會令WebView嘅Video唔能夠播返(好似仲因為佢以為個App仍收埋緊而繼續停唔畀播)
        //所以當AndroidTV一收埋左就行onDestroy()
        if(isDirectToTV()){finish()}
    }

    override fun onDestroy() {
        super.onDestroy()
        webView?.loadUrl("about:blank")
        webView?.stopLoading()
        webView?.setWebChromeClient(null)
        webView?.setWebViewClient(null)
        webView?.destroy()
        webView = null
    }
}

