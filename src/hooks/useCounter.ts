import {ref} from 'vue'
import {message} from "ant-design-vue"

export const useCounter = (current = 0, {min, max}: { min?: number, max?: number }, delay = 1000) => {
  if (current < min!) {
    current = min!
    message.error('默认值小于最小值')
  }
  if (current > max!) {
    current = max!
    message.error('默认值大于最大值')
  }
  let count = ref<number>(current)
  let inc = () => {
    if (count.value < max!) count.value++
  }
  let dec = () => {
    if (count.value > min!) count.value--
  }
  let set = (num: number) => {
    count.value = num
  }
  let reset = () => {
    count.value = current
  }
  let delayInc = () => {
    setTimeout(() => {
      count.value++
    }, delay)
  }
  let delayDec = () => {
    setTimeout(() => {
      count.value--
    }, delay)
  }
  let stepInc = (step = 1) => {
    if (count.value < max!) count.value += step
  }
  let stepDec = (step = 1,) => {
    if (count.value > min!) count.value -= step
  }
  return {
    count,
    inc,
    dec,
    set,
    reset,
    delayInc,
    delayDec,
    stepInc,
    stepDec
  }
}
