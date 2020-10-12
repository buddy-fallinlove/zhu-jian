import FootToolBar from "@/components/footToolBar/FootToolBar.vue"
import {App} from "vue"

FootToolBar.install = (app: App) => {
  app.component(FootToolBar.name!, FootToolBar)
}


export default FootToolBar
