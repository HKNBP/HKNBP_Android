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

import jquery.jq
import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document

object FullScreenButton {
    private val fullScreenButton: HTMLElement = document.getElementById("fullScreenButton") as HTMLButtonElement
    private val enterFullscreenIcon: String = "<i class=\"icon-font\">&#xe80c;</i>"
    private val exitFullscreenIcon: String = "<i class=\"icon-font\">&#xe80b;</i>"


    /**
     * 顯示全螢幕制
     * */
    fun show(){
        fullScreenButton.style.display="block"
    }

    /**
     * 隱藏全螢幕制
     *
     * 畀手機版程式唔顯示全螢幕制
     * 因為手機版程式本來就全螢幕左
     * */
    fun hide(){
        fullScreenButton.style.display="none"
    }

    /**
     * 轉成全螢幕
     * */
    fun enterFullscreen() {
        val element = document.body
        js("""
             if(element.requestFullscreen) {
                element.requestFullscreen();
              } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
              } else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
              } else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
              }
        """)
    }

    /**
     *  轉成唔係全螢幕
     *  */
    fun exitFullscreen() {
        js("""
              if(document.exitFullscreen) {
                document.exitFullscreen();
              } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if(document.msExitFullscreen)
		        document.msExitFullscreen();
        """)
    }

    /**
     *  檢查係米全螢幕
     *  */
    fun isFullscreen(): Boolean {
        return js("document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement") != undefined
    }

    init {
        fullScreenButton.onclick = fun(event){
            if (isFullscreen()) {
                exitFullscreen()
                fullScreenButton.innerHTML = enterFullscreenIcon
            } else {
                enterFullscreen()
                fullScreenButton.innerHTML = exitFullscreenIcon
            }
        }
    }
}