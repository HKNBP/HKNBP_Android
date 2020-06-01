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

import android.os.Build
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat


class MainActivity : AppCompatActivity() {

    var hknbpCoreView: HknbpCoreView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        if (21 <= Build.VERSION.SDK_INT) {
            getWindow().setNavigationBarColor(ContextCompat.getColor(this, R.color.background)) // Navigation bar the soft bottom of some phones like nexus and some Samsung note series
            getWindow().setStatusBarColor(ContextCompat.getColor(this, R.color.background)) //status bar or the time bar at the top
        }
        hknbpCoreView = findViewById(R.id.hknbpCoreView)

        Log.i("Androidlifecycle", "onCreate")
    }

    override fun onResume() {
        super.onResume()
        hknbpCoreView?.onResume()

        Log.i("Androidlifecycle", "onResume")
    }

    override fun onPause() {
        super.onPause()
        hknbpCoreView?.onPause()

        Log.i("Androidlifecycle", "onPause")
    }

    override fun onStop() {
        super.onStop()
        hknbpCoreView?.onStop()

        Log.i("Androidlifecycle", "onStop")
    }

    override fun onDestroy() {
        hknbpCoreView?.onDestroy()
        super.onDestroy()

        Log.i("Androidlifecycle", "onDestroy")
    }
}

