import Preview from "@/components/preview/Preview.vue"
import {App} from "vue"

Preview.install = (app: App) => {
  app.component(Preview.name!, Preview)
}


export default Preview
