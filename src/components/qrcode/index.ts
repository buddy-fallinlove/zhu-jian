import Qrcode from "@/components/qrcode/Qrcode.vue"
import {App} from "vue"

Qrcode.install = (app: App) => {
  app.component(Qrcode.name!, Qrcode)
}


export default Qrcode
