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

import android.view.KeyEvent
import android.view.MotionEvent
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView

interface HknbpCoreLifecycle {
    fun dispatchGenericMotionEvent(event: MotionEvent, superFun: ()->Boolean): Boolean{return false}
    fun dispatchKeyEvent(keyEvent: KeyEvent?, superFun: ()->Boolean): Boolean{return false}
    fun onPageFinished(webView: WebView, url: String){}
    fun onReceivedError(webView: WebView?, request: WebResourceRequest?, error: WebResourceError?){}
    fun onResume(){}
    fun onPause(){}
    fun onStop(){}
    fun onDestroy(){}
}