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

import android.content.res.AssetManager
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.io.OutputStream

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
                    srcName + File.separator.toString() + filename,
                    dstName + File.separator.toString() + filename
                )
            }
        }
        result
    } catch (e: IOException) {
        e.printStackTrace()
        false
    }
}