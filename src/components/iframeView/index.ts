import IframeView from "@/components/iframeView/IframeView.vue"
import {App} from "vue"

IframeView.install = (app: App) => {
  app.component(IframeView.name!, IframeView)
}


export default IframeView
