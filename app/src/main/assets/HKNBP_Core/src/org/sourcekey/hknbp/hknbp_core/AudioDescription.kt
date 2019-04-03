/*
 * HKNBP_Core is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_Core is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_Core.  If not, see <https://www.gnu.org/licenses/>.
 */

package org.sourcekey.hknbp.hknbp_core

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Window
import kotlin.browser.document
import kotlin.browser.window

object AudioDescription {
    private val audioDescription: HTMLDivElement    = document.getElementById("audioDescription") as HTMLDivElement
    private val volumeUpButton: HTMLButtonElement   = document.getElementById("audioDescriptionVolumeUpButton") as HTMLButtonElement
    private val volumeDownButton: HTMLButtonElement = document.getElementById("audioDescriptionVolumeDownButton") as HTMLButtonElement
    private val volumeValue: HTMLDivElement         = document.getElementById("audioDescriptionVolumeValue") as HTMLDivElement
    private val volumeIconList: HTMLDivElement      = document.getElementById("audioDescriptionVolumeIconList") as HTMLDivElement

    private val volumeIcon = "<i class=\"icon-font\">&#xe82a;</i>"
    private var hideTimer = window.setTimeout(fun(){ }, 0)


    fun show(){
        volumeValue.innerHTML = player.volume.toInt().toString()
        volumeIconList.innerHTML = ""
        for(i in 0 until (player.volume/10).toInt()){volumeIconList.innerHTML += volumeIcon}
        audioDescription.style.display = "block"
    }

    fun show(showTime: Int){
        window.clearTimeout(hideTimer)
        hideTimer = window.setTimeout(fun(){ hide() }, showTime)
        show()
    }

    fun hide(){
        audioDescription.style.display = "none"
    }

    init {
        volumeUpButton.onclick = fun(event){player.volumeUp}
        volumeDownButton.onclick = fun(event){player.volumeDown}
    }
}