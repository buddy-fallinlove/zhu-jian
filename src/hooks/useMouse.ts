import {ref, onMounted, onUnmounted} from 'vue'

export const useMouse = () => {
  let x = ref<number>(0)
  let y = ref<number>(0)
  let move = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', move)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', move)
  })
  return {
    x,
    y
  }
}
