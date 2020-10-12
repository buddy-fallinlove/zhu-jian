import dayjs from "dayjs"
import {ref, onMounted, onUnmounted} from 'vue'

export const useDate = () => {
  let timer: any = null
  let now = ref(dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss'))
  onMounted(() => {
    timer = setInterval(() => {
      now.value = dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss')
    }, 1000)
  })
  onUnmounted(() => {
    clearInterval(timer)
  })
  return {
    now
  }
}
