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
import android.content.SharedPreferences
import android.webkit.JavascriptInterface
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.widget.Toast

class HknbpCoreConfirmer(val webView: WebView, val activity: Activity, val coreURL: String) : HknbpCoreLifecycle{

    private val javascriptInterfaceName = "MakeSureWebLoadeder"

    private var saver: SharedPreferences = activity.getSharedPreferences("HknbpSaver", 0)

    private var isCoreLoaded = saver.getBoolean("isLoadedCoreOnCache", false)

    private fun putInternalHknbpCoreCache(){
        //檢查係米首次運行程式
        if(!isCoreLoaded){
            //由Assets度複製HKNBP_Core嘅WebviewCache到本程式數據資料夾度
            activity.getApplicationContext().assets.copyAssetFolder(
                "app_webview",
                activity.getApplicationContext().filesDir.getParent()+"/app_webview"
            )
        }
    }

    @JavascriptInterface fun returnWebStatus(isLoaded: String){
        isCoreLoaded = isLoaded.toBoolean()
    }

    private val coreObjectName = "hknbpCore"

    private fun checkCoreObjectIsLoadedOfJS(){
        if(webView.url?.matches("(.*)${coreURL}(.*)".toRegex()) == true){//檢查個webView係米HKNBP根目錄
            webView.loadUrl("""javascript:
                try{
                    if(${coreObjectName}){
                        ${javascriptInterfaceName}.returnWebStatus(true);
                    }else{
                        ${javascriptInterfaceName}.returnWebStatus(false);
                    }
                }catch(e){${javascriptInterfaceName}.returnWebStatus(false);}
            """)
        }
    }

    /**
     * 不斷檢查Core加載好未
     * */
    private fun setCheckCoreIsLoaded(){
        checkCoreObjectIsLoadedOfJS()
        android.os.Handler().postDelayed({
            if(!isCoreLoaded){
                //重Load Core
                webView.loadUrl(coreURL)
                //重新倒數再檢查Core Load好未
                android.os.Handler().postDelayed({ setCheckCoreIsLoaded() }, 60000)
            }
        }, 5000)
    }

    /**
     * 記錄底已Load好HKNBP_Core嘅快取
     * */
    private fun recordedLoadedCoreOnCache(){
        val editer = saver?.edit()
        editer?.putBoolean("isLoadedCoreOnCache", false)
        editer?.apply()
    }

    override fun onPageFinished(webView: WebView, url: String) {
        //記錄底已Load好HKNBP_Core嘅快取
        recordedLoadedCoreOnCache()
    }

    override fun onReceivedError(
        webView: WebView?,
        request: WebResourceRequest?,
        error: WebResourceError?
    ) {
        if(webView?.url == coreURL){
            //重新加載Core
            android.os.Handler().postDelayed({ webView?.loadUrl(webView?.url) }, 60000)
            //顯示加載唔到Core訊息
            Toast.makeText(activity, R.string.pleaseMakeSureTheDeviceIsConnectedToTheInternet, Toast.LENGTH_LONG).show()
        }
    }

    init {
        webView.addJavascriptInterface(this, javascriptInterfaceName)//加個[值]到JS被JS去AndroidCode
        putInternalHknbpCoreCache()
        setCheckCoreIsLoaded()
    }
}