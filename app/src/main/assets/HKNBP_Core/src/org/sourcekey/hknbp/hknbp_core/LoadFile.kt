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
import org.w3c.dom.*
import org.w3c.dom.parsing.DOMParser
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document

object LoadFile {
    fun load(filePath: String, onLoadedFile: (xmlhttp: XMLHttpRequest)->Unit){
        val xmlhttp = XMLHttpRequest()
        xmlhttp.onreadystatechange = fun(event) {
            if (xmlhttp.readyState === 4 as Short && xmlhttp.status === 200 as Short) {
                onLoadedFile(xmlhttp)
            }else{
                //PromptBox.promptMessage(dialogues.node().canNotReadData)
            }
        }
        xmlhttp.open("GET", filePath, true)
        xmlhttp.send()





        //println(js("\$.support.cors"))

        /**
        val loadFileCache = document.getElementById("loadFileCache") as HTMLDivElement
        val iframe = document.createElement("iframe") as HTMLIFrameElement
        iframe.id = "loadFileCache1"
        iframe.src = "http://tvprofil.net/xmltv/data/htv1.hr/weekly_htv1.hr_tvprofil.net.xml"
        iframe.onload = fun(event){
            println(document.getElementsByTagName("tv").get(0)!!.innerHTML)
            val xmlDoc = DOMParser().parseFromString((document.getElementById("loadFileCache1") as HTMLIFrameElement).innerHTML, "text/xml")
            println(xmlDoc.getElementsByTagName("channel").get(0)?.innerHTML?:"xxxxxxx")
        }
        loadFileCache.append(iframe)
        */

        /**
        js("" +
                "\$.ajax({\n" +
                "        type: 'GET',\n" +
                "        dataType: 'jsonp',                \n" +
                "        url: 'http://tvprofil.net/xmltv/data/htv1.hr/weekly_htv1.hr_tvprofil.net.xml',\n" +
                "        success: function (xml) \n" +
                "        { //do stuff with received xml \n" +
                "           console.log(xml);" +
                "        }}); "
        )*/
    }

    fun load(filePath: String): XMLHttpRequest{
        val xmlhttp = XMLHttpRequest()
        xmlhttp.open("GET", filePath, false)
        xmlhttp.send()
        return xmlhttp
    }
}