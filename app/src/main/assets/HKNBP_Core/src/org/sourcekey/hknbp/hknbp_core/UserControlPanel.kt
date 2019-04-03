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
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Math

/**
 * 操作使用者介面器
 * */
object UserControlPanel {
    private val userControlPanel: HTMLElement   = document.getElementById("userControlPanel") as HTMLElement
    private val shower: HTMLElement             = document.getElementById("userControlPanelShower") as HTMLElement

    /**
     * 操作使用者介面器出現時間
     *
     * 唔private係因為其他平台需要更改再長啲時間
     * 來畀唔同操作器嘅使用者方便
     * */
    var userControlPanelShowTime: Int = 500

    /**
     * 隱藏操作使用者介面板計時器
     * */
    private var hideTimer: Int = 0
        set(value) {
            window.clearTimeout(field)
            field = value
        }

    /**
     * 隱藏滑鼠計時器
     * */
    private var hideMouseTimer: Int = 0
        set(value) {
            window.clearTimeout(field)
            field = value
        }

    /**
     * 響顯示UserControlPanel時執行嘅程序
     * 畀外部連接
     * 當以HKNBP_Core有以下動作時
     * 外部程序可以寫入以下function
     * 執行外部某特定需要程序
     * 模仿Set Listener做法
     * */
    var onShowUserControlPanel: ()->Unit = fun(){}

    /**
     * 響隱藏UserControlPanel時執行嘅程序
     * 畀外部連接
     * 當以HKNBP_Core有以下動作時
     * 外部程序可以寫入以下function
     * 執行外部某特定需要程序
     * 模仿Set Listener做法
     * */
    var onHideUserControlPanel: ()->Unit = fun(){}


    fun show(){
        userControlPanel.style.display="block"
        onShowUserControlPanel()
        window.clearTimeout(hideTimer)
        jQuery("#userControlPanelShower").css("cursor", "auto")
    }

    fun show(hideTimerTimeout: Int){
        show()
        hideTimer = window.setTimeout(fun(){ hide() }, hideTimerTimeout)
    }

    fun hide(){
        userControlPanel.style.display="none"
        onHideUserControlPanel()
        window.clearTimeout(hideTimer)
        hideMouseTimer = window.setTimeout(fun(){ jQuery("#userControlPanelShower").css("cursor", "none") }, 2000)
    }

    /**
     * 用onmousedown加onmouseup實現<長撳>功能
     *
     * 由於完本HTML並無<長撳>功能
     * */
    private class OnLongClick(val onLongClickProgram: ()->Unit){
        private var pressTimer = 0
        var isPressDown = false

        fun mousedown(): Boolean{
            isPressDown = true
            window.setTimeout(fun(){
                if(isPressDown){
                    pressTimer = window.setInterval(fun(){
                        onLongClickProgram()
                    }, 100)
                }
            }, 500)
            return false
        }

        fun mouseup(): Boolean{
            isPressDown = false
            window.clearInterval(pressTimer)
            return false
        }
    }

    /**
     * 盛載當前長撳動作
     */
    private var onLongClick = OnLongClick(fun(){})
        set(value) {
            field.mouseup()
            field = value
        }

    /**
     * 設置所有Button擁有<長撳>功能
     * */
    private fun setAllBuutonOnLongClickFeatures(){
        jQuery("button").mousedown(fun(){
            val button = jQuery(js("this"))
            onLongClick = OnLongClick(fun(){button.click()})
            onLongClick.mousedown()
        }).mouseup(fun(){
            onLongClick.mouseup()
        }).mouseout(fun(){
            onLongClick.mouseup()
        })
    }

    init {
        //初始化各使用者控制界面
        VirtualRemote
        FullScreenButton
        PictureInPictureButton

        //設定使用者控制界面顯示方法
        ////滑鼠////
        shower.onclick = fun(event){
            if(userControlPanel.style.display==="block"){
                hide()
            }else{
                show(15000)
            }
        }
        shower.onmousemove = fun(event){
            show(500)
        }
        userControlPanel.onmousemove = fun(event){
            //使用緊userControlPanel就繼續顯示
            event.stopPropagation()
            show(30000)
        }
        ////遙控////
        userControlPanel.onfocus = fun(event){
            show(15000)
        }
        ////觸控////
        val _shower: dynamic = shower
        _shower.ontouchstart = fun(event: MouseEvent){
            event.preventDefault()//因觸控會同時觸發其他EVENT,https://medium.com/frochu/touch-and-mouse-together-76fb69114c04
            if(userControlPanel.style.display==="block"){
                hide()
            }else{
                show(15000)
            }
        }

        //設 當onfocus 就onhover 同步
        jQuery("button, select, option, input").focus(fun(){ jQuery(js("this").hover()) })

        //設置所有制當長撳制時不斷重複執行onClick程序
        setAllBuutonOnLongClickFeatures()
    }
}
