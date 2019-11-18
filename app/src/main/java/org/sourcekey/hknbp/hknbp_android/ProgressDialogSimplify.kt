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
import android.app.ProgressDialog

class ProgressDialogSimplify(
    activity :Activity,
    val message: String = ""
): ProgressDialog(activity){
    fun change(i :Int){
        incrementProgressBy(i)
    }

    fun remove(){
        //移除ProgressDialog
        hide()
        dismiss()
        //progressDialog = null
    }

    init {
        //新增ProgressDialog
        setMessage(message)
        setProgressStyle(STYLE_HORIZONTAL)
        setMax(100)
        show()
        //setCancelable(false)


    }
}