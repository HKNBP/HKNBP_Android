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
import android.content.ActivityNotFoundException
import android.content.DialogInterface
import android.content.Intent
import android.net.Uri

fun createUpdateAlertByGooglePlayStore(
    title: String?,
    message: String?,
    button: Boolean,
    appPackageName: String,
    activity: Activity
){
    val alertDialog: AlertDialog = AlertDialog.Builder(activity).create()
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
                    activity.startActivity(browserIntent)
                } catch (anfe: ActivityNotFoundException) {
                    val browserIntent = Intent(
                        Intent.ACTION_VIEW,
                        Uri.parse("https://play.google.com/store/apps/details?id=$appPackageName")
                    )
                    activity.startActivity(browserIntent)
                }
            })
    }
    alertDialog.show()
}