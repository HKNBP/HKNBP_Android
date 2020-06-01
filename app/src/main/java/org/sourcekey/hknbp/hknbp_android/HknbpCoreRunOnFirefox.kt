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
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.webkit.WebView

class HknbpCoreRunOnFirefox(val webView: WebView, val activity: Activity, val coreURL: String) : HknbpCoreLifecycle {

    val firefoxPackageName = "org.mozilla.firefox"

    fun switchFirefoxRun(){
        try {
            val webViewVersion = activity.packageManager.getPackageInfo(firefoxPackageName, 0).versionName
            if(68 <= webViewVersion.split(".").getOrNull(0)?.toIntOrNull()?:0){//68版本測試未發現有問題
                //使用Firefox開啟HKNBP
                val browserIntent = Intent(
                    Intent.ACTION_VIEW,
                    Uri.parse(coreURL)
                )
                browserIntent.setPackage(firefoxPackageName)
                activity.startActivity(browserIntent)
            }else{
                createUpdateAlertByGooglePlayStore(
                    webView.getResources().getString(R.string.needUpdateYourFirefox),
                    webView.getResources().getString(R.string.thisApplicationUseFirefoxWithSupportES5),
                    true,
                    firefoxPackageName,
                    activity
                )
            }
        } catch (e: Exception) {
            //Log.e("WebView", "Android System WebView is not found")
            createUpdateAlertByGooglePlayStore(
                webView.getResources().getString(R.string.needInstallFirefox),
                webView.getResources().getString(R.string.pleaseInstallFirefoxFromeGooglePlayStore),
                true,
                firefoxPackageName,
                activity
            )
        }
    }

    override fun onResume() {
        //因Android5之前嘅WebView不能透過PlayStore更新
        //所以需要使用仲有為Android5之前嘅系統更新嘅瀏覽器運行HKNBP
        if(21 > Build.VERSION.SDK_INT){ switchFirefoxRun() }
    }

}