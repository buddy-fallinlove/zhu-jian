import {Component, App} from 'vue'
import {AiComponents} from "@/types"
import Preview from "@/components/preview"
import FootToolBar from "@/components/footToolBar"
import Trend from "@/components/trend"
import NoticeIcon from "@/components/noticeIcon"
import IframeView from "@/components/iframeView"
import CountDown from "@/components/countDown"
import AiProgress from "@/components/aiProgress"
import Calendar from "@/components/calendar"
import Qrcode from "@/components/qrcode"
import EditText from "@/components/editText"

const globalComponents: Component[] & AiComponents[] = []
globalComponents.push(Preview)
globalComponents.push(FootToolBar)
globalComponents.push(Trend)
globalComponents.push(IframeView)
globalComponents.push(NoticeIcon)
globalComponents.push(CountDown)
globalComponents.push(AiProgress)
globalComponents.push(Calendar)
globalComponents.push(Qrcode)
globalComponents.push(EditText)


export default {
  install(app: App) {
    globalComponents.map((item: Component & AiComponents) => {
      app.use(item)
    })
  }
}


