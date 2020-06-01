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

import android.app.Activity
import android.app.AlertDialog
import android.app.UiModeManager
import android.content.*
import android.content.res.AssetManager
import android.content.res.Configuration
import android.media.AudioManager
import android.net.Uri
import android.os.Build
import android.util.AttributeSet
import android.util.Log
import android.view.InputDevice
import android.view.KeyEvent
import android.view.MotionEvent
import android.view.View
import android.webkit.*
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.core.content.ContextCompat
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.io.OutputStream

class HknbpCoreView : WebView {

    constructor(context: Context?) : super(context)

    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs)

    constructor(
        context: Context?, attrs: AttributeSet?, defStyleAttr: Int
    ) : super(context, attrs, defStyleAttr)

    constructor(
        context: Context?,
        attrs: AttributeSet?,
        defStyleAttr: Int,
        privateBrowsing: Boolean
    ) : super(context, attrs, defStyleAttr, privateBrowsing)

    @RequiresApi(Build.VERSION_CODES.LOLLIPOP) constructor(
        context: Context?, attrs: AttributeSet?, defStyleAttr: Int, defStyleRes: Int
    ) : super(context, attrs, defStyleAttr, defStyleRes)

    private var activity: Activity = context as Activity

    private val coreURL = "https://hknbp.org/" //"file:///android_asset/HKNBP_Core/index.html"

    private val appVersion = "v${BuildConfig.VERSION_CODE}-Android"

    private val hknbpCoreLifecycles: ArrayList<HknbpCoreLifecycle> = ArrayList()

    /**
     * 控桿程序
     * */
    override fun dispatchGenericMotionEvent(event: MotionEvent): Boolean {
        var returnValue = false
        for (hknbpCoreLifecycle in hknbpCoreLifecycles){
            returnValue = returnValue or hknbpCoreLifecycle.dispatchGenericMotionEvent(
                event, fun():Boolean{return super.dispatchGenericMotionEvent(event)}
            )
        }
        return returnValue
    }

    /**
     * 響全個APP做OnKey
     * 唔限某特定View
     * 唔使個個View去setOnKeyListener
     */
    override fun dispatchKeyEvent(keyEvent: KeyEvent?): Boolean {
        var returnValue = false
        for (hknbpCoreLifecycle in hknbpCoreLifecycles){
            returnValue = returnValue or hknbpCoreLifecycle.dispatchKeyEvent(
                keyEvent, fun():Boolean{return super.dispatchKeyEvent(keyEvent)}
            )
        }
        return returnValue
    }

    private fun isDirectToTV(): Boolean{
        val uiModeManager = activity.getSystemService(Context.UI_MODE_SERVICE) as UiModeManager
        return uiModeManager.currentModeType == Configuration.UI_MODE_TYPE_TELEVISION
    }

    private fun ininWebViewClient(){
        webViewClient = object : WebViewClient() {
            override fun onPageFinished(webView: WebView, url: String) {
                super.onPageFinished(webView, url)
                /*//移除ProgressDialog
                if(url?.matches("(.*)${coreURL}(.*)".toRegex()) == true){
                    progressDialogSimplify?.remove()
                    //防冇隱藏progressDialog, 因試過唔知咩事唔識隱藏
                    android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 1000)
                    android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 5000)
                    android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 10000)
                    android.os.Handler().postDelayed({ progressDialogSimplify?.remove() }, 60000)
                }*/
                for (hknbpCoreLifecycle in hknbpCoreLifecycles){hknbpCoreLifecycle.onPageFinished(webView, url)}
                //話畀Core知個App係咩版本
                loadUrl("javascript:window.setTimeout(function(){hknbpAppVersion(\"${appVersion}\");},0)")
            }

            override fun onReceivedError(webView: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                super.onReceivedError(webView, request, error)
                for (hknbpCoreLifecycle in hknbpCoreLifecycles){hknbpCoreLifecycle.onReceivedError(webView, request, error)}
            }
        }
    }

    /**
     * 設置WebView設定
     * */
    private fun initWebViewSettings(){
        Log.i("WebViewVersion", getSettings()?.getUserAgentString())
        settings.domStorageEnabled = true
        settings.javaScriptCanOpenWindowsAutomatically = true//設定允許畀JavaScript彈另一個window
        if(16 <= Build.VERSION.SDK_INT){settings.allowFileAccessFromFileURLs = true}
        settings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK)//開啟離線網頁功能,為之後上唔到個網都可以用到
        settings.javaScriptEnabled = true//設定同JavaScript互Call權限
        settings.setPluginState(WebSettings.PluginState.ON)
        settings.setPluginState(WebSettings.PluginState.ON_DEMAND)
        settings.setUserAgentString("Android Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Safari/537.36")//使用DesktopMode,YoutubeAPI需要DesktopMode先自動播放
        if(Build.VERSION.SDK_INT>16){settings.setMediaPlaybackRequiresUserGesture(false)}//Video自動播放
        /*var progressDialogSimplify: ProgressDialogSimplify? = null
        webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(webView: WebView, progress: Int) {
                if(url == coreURL){
                    //新增ProgressDialog
                    if(progressDialogSimplify == null){
                        progressDialogSimplify = ProgressDialogSimplify(
                            mainActivity,
                            getResources().getString(R.string.loaded)
                        )
                    }
                    //更新ProgressDialog顯示載入進度
                    progressDialogSimplify?.change(progress)
                }
            }
        }*/
        ininWebViewClient()
        setBackgroundColor(0x000000)
        loadUrl(coreURL)
        requestFocus()
    }

    private val webViewPackageName = "com.google.android.webview"

    private fun updateWebViewVersion(){
        //Log.e("WebView", "Android System WebView is not found")
        createUpdateAlertByGooglePlayStore(
            getResources().getString(R.string.needInstallWebView),
            getResources().getString(R.string.pleaseInstallWebViewFromeGooglePlayStore),
            true,
            webViewPackageName,
            activity
        )
    }

    private fun initWebView(){
        try { initWebViewSettings() } catch (e: Exception) { updateWebViewVersion() }
    }

    init {
        //因Android5之前嘅WebView不能透過PlayStore更新
        //所以需要使用仲有為Android5之前嘅系統更新嘅瀏覽器運行HKNBP
        //唔行WebView
        if(21 <= Build.VERSION.SDK_INT){ initWebView() }
        //hknbpCoreLifecycles.add(HknbpCoreConfirmer(this, activity, coreURL))
        hknbpCoreLifecycles.add(HknbpCoreRunOnFirefox(this, activity, coreURL))
        hknbpCoreLifecycles.add(HknbpCoreUIEvent(this, activity))
        hknbpCoreLifecycles.add(HknbpCoreVolumeEvent(this, activity))
        hknbpCoreLifecycles.add(HknbpCoreKeyEvent(this))
    }

    override fun onResume() {
        for (hknbpCoreLifecycle in hknbpCoreLifecycles){hknbpCoreLifecycle.onResume()}
        super.onResume()
        resumeTimers()
    }

    override fun onPause() {
        for (hknbpCoreLifecycle in hknbpCoreLifecycles){hknbpCoreLifecycle.onPause()}
        super.onPause()
        pauseTimers()
    }

    fun onStop(){
        for (hknbpCoreLifecycle in hknbpCoreLifecycles){hknbpCoreLifecycle.onStop()}
        //由於AndroidTV唔知點解收埋左唔行onDestroy()但打開返又行onCreate()
        //而呢個情況會令WebView嘅Video唔能夠播返(好似仲因為佢以為個App仍收埋緊而繼續停唔畀播)
        //所以當AndroidTV一收埋左就行onDestroy()
        if(isDirectToTV()){activity.finish()}
    }

    fun onDestroy(){
        for (hknbpCoreLifecycle in hknbpCoreLifecycles){hknbpCoreLifecycle.onDestroy()}
        loadUrl("about:blank")
        stopLoading()
        setWebChromeClient(null)
        setWebViewClient(null)
        hknbpCoreLifecycles.clear()
        destroy()
    }
}