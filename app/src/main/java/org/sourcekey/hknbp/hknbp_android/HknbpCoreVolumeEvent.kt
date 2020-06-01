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
import android.content.Context
import android.media.AudioManager
import android.webkit.JavascriptInterface
import android.webkit.WebView

class HknbpCoreVolumeEvent(val webView: WebView, val activity: Activity) : HknbpCoreLifecycle {

    private val javascriptInterfaceName = "HknbpAndroidVolumeEvent"

    /**
     * 畀JS去Call AndroidCode
     *
     * 唔知咩原因使用webView.addJavascriptInterface(this, "Name")個this時
     * 試到響AndroidTV API22會彈App
     * 暫時試到解決方法是另起一個object(如下)
     * */
    private class JavascriptInterfaceObject(val activity: Activity){
        @JavascriptInterface fun volumeUp(){
            val audio = activity.getSystemService(Context.AUDIO_SERVICE) as AudioManager
            audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_RAISE, AudioManager.FLAG_SHOW_UI)
        }

        @JavascriptInterface fun volumeDown(){
            val audio = activity.getSystemService(Context.AUDIO_SERVICE) as AudioManager
            audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_LOWER, AudioManager.FLAG_SHOW_UI)
        }

        @JavascriptInterface fun volumeMute(){
            val audio = activity.getSystemService(Context.AUDIO_SERVICE) as AudioManager
            audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_TOGGLE_MUTE, AudioManager.FLAG_SHOW_UI)
        }
    }

    override fun onPageFinished(webView: WebView, url: String) {
        //虛擬搖控鍵設換
        webView.loadUrl("javascript:hknbpVolumeUp(function(){${javascriptInterfaceName}.volumeUp();});")
        webView.loadUrl("javascript:hknbpVolumeDown(function(){${javascriptInterfaceName}.volumeDown();});")
        webView.loadUrl("javascript:hknbpVolumeMute(function(){${javascriptInterfaceName}.volumeMute();});")
    }

    init {
        webView.addJavascriptInterface(JavascriptInterfaceObject(activity), javascriptInterfaceName)//加個[值]到JS被JS去AndroidCode
    }
}