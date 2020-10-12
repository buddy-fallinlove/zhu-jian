import AiProgress from "@/components/aiProgress/AiProgress.vue"
import {App} from "vue"

AiProgress.install = (app: App) => {
  app.component(AiProgress.name!, AiProgress)
}


export default AiProgress
