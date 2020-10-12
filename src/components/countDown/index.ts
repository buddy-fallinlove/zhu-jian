import CountDown from "@/components/countDown/CountDown.vue"
import {App} from "vue"

CountDown.install = (app: App) => {
  app.component(CountDown.name!, CountDown)
}


export default CountDown
