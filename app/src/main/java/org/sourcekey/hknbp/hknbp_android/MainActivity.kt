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
import android.content.*
import android.content.res.AssetManager
import android.content.res.Configuration
import android.media.AudioManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.KeyEvent
import android.view.MotionEvent
import android.view.View
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import java.io.*
import java.io.File.separator


class MainActivity : AppCompatActivity() {
    val coreURL = "https://hknbp.org/" //"http://192.168.0.169:8000"//"https://hknbp.org/"//"file:///android_asset/HKNBP_Core/index.html"
    val corePath = "HKNBP_Core.org.sourcekey.hknbp.hknbp_core"
    val coreKotlinJSPath = "javascript:${corePath}"
    val appVersion = "v${BuildConfig.VERSION_CODE}-Android"
    val webViewPackageName = "com.google.android.webview"
    val firefoxPackageName = "org.mozilla.firefox"
    val mainActivity: MainActivity = this
    var saver: SharedPreferences? = null
    var webView: WebView? = null

    val remotePath = "${coreKotlinJSPath}.VirtualRemote"

    /**
     * 佢可以響全個APP做OnKey
     * 唔限某特定View
     * 唔使個個View去setOnKeyListener
     */
    override fun superDispatchKeyEvent(keyEvent: KeyEvent?): Boolean {
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
                KeyEvent.KEYCODE_DPAD_CENTER            -> {webView?.loadUrl("${remotePath}.centerButton.click();")}
                KeyEvent.KEYCODE_DPAD_UP                -> {webView?.loadUrl("${remotePath}.upButton.click();")}
                KeyEvent.KEYCODE_DPAD_UP_LEFT           -> {webView?.loadUrl("${remotePath}.upButton.click();")}//////暫時性
                KeyEvent.KEYCODE_DPAD_UP_RIGHT          -> {webView?.loadUrl("${remotePath}.upButton.click();")}//////暫時性
                KeyEvent.KEYCODE_DPAD_DOWN              -> {webView?.loadUrl("${remotePath}.downButton.click();")}
                KeyEvent.KEYCODE_DPAD_DOWN_LEFT         -> {webView?.loadUrl("${remotePath}.downButton.click();")}//////暫時性
                KeyEvent.KEYCODE_DPAD_DOWN_RIGHT        -> {webView?.loadUrl("${remotePath}.downButton.click();")}//////暫時性
                KeyEvent.KEYCODE_DPAD_LEFT              -> {webView?.loadUrl("${remotePath}.leftButton.click();")}
                KeyEvent.KEYCODE_DPAD_RIGHT             -> {webView?.loadUrl("${remotePath}.rightButton.click();")}
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
                KeyEvent.KEYCODE_MINUS                  -> {webView?.loadUrl("${remotePath}.minusButton.click();")}
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
                else                                    -> {
                    webView?.loadUrl("${coreKotlinJSPath}.PromptBox.promptMessage(\"本程式並無此功能提供${keyEvent.keyCode}\");")
                    return super.superDispatchKeyEvent(keyEvent)
                }
            }
        }
        return true
    }

    /**
     * (未完成)
     * 試下響度set DPAD
     * 睇下google畀唔畀發androidTV
     * */
    override fun onGenericMotionEvent(event: MotionEvent?): Boolean {

        return super.onGenericMotionEvent(event)
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
        if(isCoreLoaded){
            //設置已唔係首次運行程式
            val editer = saver?.edit()
            editer?.putBoolean("isLoadedCoreOnCache", false)
            editer?.apply()
        }else{
            //重Load Core
            webView?.loadUrl(coreURL)
        }
        //重新倒數再檢查Core Load好未
        android.os.Handler().postDelayed({ setCheckCoreLoaded() }, 60000)
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

    fun AssetManager.copyAssetFile(srcName: String, dstName: String): Boolean {
        return try {
            val `in` = this.open(srcName)
            val outFile = File(dstName)
            val out: OutputStream = FileOutputStream(outFile)
            val buffer = ByteArray(1024)
            var read: Int
            while (`in`.read(buffer).also { read = it } != -1) {
                out.write(buffer, 0, read)
            }
            `in`.close()
            out.close()
            true
        } catch (e: IOException) {
            e.printStackTrace()
            false
        }
    }

    fun AssetManager.copyAssetFolder(srcName: String, dstName: String): Boolean {
        return try {
            var result = true
            val fileList = this.list(srcName) ?: return false
            if (fileList.size == 0) {
                result = copyAssetFile(srcName, dstName)
            } else {
                val file = File(dstName)
                result = file.mkdirs()
                for (filename in fileList) {
                    result = result and copyAssetFolder(
                        srcName + separator.toString() + filename,
                        dstName + separator.toString() + filename
                    )
                }
            }
            result
        } catch (e: IOException) {
            e.printStackTrace()
            false
        }
    }

    fun initWebView(){
        try {
            //檢查係米首次運行程式
            if(saver?.getBoolean("isLoadedCoreOnCache", true)?:true){
                //由Assets度複製HKNBP_Core嘅WebviewCache到本程式數據資料夾度
                getApplicationContext().assets.copyAssetFolder(
                    "app_webview",
                    getApplicationContext().filesDir.getParent()+"/app_webview"
                )
            }
            //設置WebView
            webView = findViewById(R.id.webView)
            Log.i("WebViewVersion", webView?.getSettings()?.getUserAgentString())
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
            /*var progressDialogSimplify: ProgressDialogSimplify? = null
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
            }*/
            webView?.webViewClient = object : WebViewClient() {
                private fun checkCoreIsLoaded(webView: WebView?){
                    if(webView?.url?.matches("(.*)${coreURL}(.*)".toRegex()) == true){//檢查個webView係米HKNBP根目錄
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
                    /*//移除ProgressDialog
                    if(webView?.url?.matches("(.*)${coreURL}(.*)".toRegex()) == true){
                        progressDialogSimplify?.remove()
                        //防冇隱藏progressDialog, 因試過唔知咩事唔識隱藏
                        android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 1000)
                        android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 5000)
                        android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 10000)
                        android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 60000)
                    }*/
                    //Set個Function落HKNBP_Core嘅JavaScript度畀佢之後可以Call返來執行某啲動作
                    webView?.loadUrl("${coreKotlinJSPath}.UserControlPanel.onShowUserControlPanel=function(){HKNBP_Android.requestSystemUI(true);};")
                    webView?.loadUrl("${coreKotlinJSPath}.UserControlPanel.onHideUserControlPanel=function(){HKNBP_Android.requestSystemUI(false);};")
                    //虛擬搖控鍵設換
                    webView?.loadUrl("${coreKotlinJSPath}.Player.volumeUp=function(){HKNBP_Android.volumeUp();};")
                    webView?.loadUrl("${coreKotlinJSPath}.Player.volumeDown=function(){HKNBP_Android.volumeDown();};")
                    webView?.loadUrl("${coreKotlinJSPath}.Player.volumeMute=function(){HKNBP_Android.volumeMute();};")
                    //話畀Core知個App係咩版本
                    webView?.loadUrl("javascript:window.setTimeout(function(){${corePath}.appVersion=\"${appVersion}\";},0)")
                    /*//顯一顯示VirtualRemote,因Google好似唔知本程式已有DPAD功能而不斷唔畀將程式發報到AndroidTV度
                    if(isDirectToTV()){
                        webView?.loadUrl("""javascript:
                            ${corePath}.UserControlPanel.show();
                            window.setTimeout(function(){
                                ${corePath}.UserControlPanel.hide();
                            }, 3000);
                        """)
                    }*/
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
                    getResources().getString(R.string.thisApplicationUseFirefoxWithSupportES5),
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
        saver = getSharedPreferences("HKNBP_Android", 0)

        Log.i("Androidlifecycle", "onCreate")
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

        Log.i("Androidlifecycle", "onResume")
    }

    override fun onPause() {
        super.onPause()

        webView?.onPause()
        webView?.pauseTimers()

        Log.i("Androidlifecycle", "onPause")
    }

    override fun onStop() {
        super.onStop()

        //由於AndroidTV唔知點解收埋左唔行onDestroy()但打開返又行onCreate()
        //而呢個情況會令WebView嘅Video唔能夠播返(好似仲因為佢以為個App仍收埋緊而繼續停唔畀播)
        //所以當AndroidTV一收埋左就行onDestroy()
        if(isDirectToTV()){finish()}

        Log.i("Androidlifecycle", "onStop")
    }

    override fun onDestroy() {
        webView?.loadUrl("about:blank")
        webView?.stopLoading()
        webView?.setWebChromeClient(null)
        webView?.setWebViewClient(null)
        webView?.destroy()
        webView = null
        super.onDestroy()
        Log.i("Androidlifecycle", "onDestroy")
    }
}

