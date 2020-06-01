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
import android.util.Log
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebView

class HknbpCoreUIEvent(val webView: WebView, val activity: Activity) : HknbpCoreLifecycle {

    private val javascriptInterfaceName = "HknbpAndroidUIEvent"

    fun showSystemUI() {
        // Shows the system bars by removing all the flags
        // except for the ones that make the content appear under the system bars.
        activity.window.decorView.systemUiVisibility = (
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE// or
                //View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                //View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                )
    }

    fun hideSystemUI() {
        // Enables regular immersive mode.
        // For "lean back" mode, remove SYSTEM_UI_FLAG_IMMERSIVE.
        // Or for "sticky immersive," replace it with SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        activity.window.decorView.systemUiVisibility = (
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

    private var isNeedShow: Boolean = false
        get() = JavascriptInterfaceObject.isNeedShow

    /**
     * 不斷檢查Core嘅UserControlPanel有冇顯示
     *
     * 為左能夠將(Core嘅UserControlPanel)同(Android嘅SystemUI(如:HOME鍵,返回鍵,時間,等等顯示))同步
     * 但如果直接被JS去Call出來叫AndroidCode去顯示/隱藏SystemUI
     * Android好似唔畀咁做(冇反應)
     * 所以(解決方法)要由Android嘅線程出發
     * 當檢查Core嘅UserControlPanel顯示/隱藏時
     * 就將SystemUI顯示/隱藏
     * */
    private fun setSystemUIController(){
        android.os.Handler().postDelayed({
            setSystemUIController()
            if(isNeedShow){showSystemUI()}else{hideSystemUI()}
        }, 1000)
    }

    override fun onPageFinished(webView: WebView, url: String) {
        //Set個Function落HKNBP_Core嘅JavaScript度畀佢之後可以Call返來執行某啲動作
        webView.loadUrl("javascript:hknbpShowControlPanel(function(){${javascriptInterfaceName}.requestSystemUI(true);});")
        webView.loadUrl("javascript:hknbpHideControlPanel(function(){${javascriptInterfaceName}.requestSystemUI(false);});")
        /*//顯一顯示VirtualRemote,因Google好似唔知本程式已有DPAD功能而不斷唔畀將程式發報到AndroidTV度
        if(isDirectToTV()){
            loadUrl("""javascript:
                ${corePath}.UserControlPanel.show();
                window.setTimeout(function(){
                    ${corePath}.UserControlPanel.hide();
                }, 3000);
            """)
        }*/
    }

    /**
     * 畀JS去Call AndroidCode
     *
     * 唔知咩原因使用webView.addJavascriptInterface(this, "Name")個this時
     * 試到響AndroidTV API22會彈App
     * 暫時試到解決方法是另起一個object(如下)
     * */
    private object JavascriptInterfaceObject{
        var isNeedShow = false
        @JavascriptInterface fun requestSystemUI(isShow: String){
            isNeedShow = isShow.toBoolean()
        }
    }

    init {
        webView.addJavascriptInterface(JavascriptInterfaceObject, javascriptInterfaceName)//加個[值]到JS被JS去AndroidCode
        hideSystemUI()
        setSystemUIController()
    }
}