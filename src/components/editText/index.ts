import EditText from "@/components/editText/EditText.vue"
import {App} from "vue"

EditText.install = (app: App) => {
  app.component(EditText.name!, EditText)
}
export default EditText
