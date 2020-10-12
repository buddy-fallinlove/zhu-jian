import NoticeIcon from "@/components/noticeIcon/NoticeIcon.vue"
import {App} from "vue"

NoticeIcon.install = (app: App) => {
  app.component(NoticeIcon.name!, NoticeIcon)
}


export default NoticeIcon
