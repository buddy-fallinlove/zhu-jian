<template>
  <div>
    <h2>倒计时</h2>
    <div>{{ now }}</div>
    <br />
    <h2>鼠标移动的坐标</h2>
    {{ x }} --- {{ y }} <br /><br />
    <h2>计数器</h2>
    <a-button size="small" @click="inc">增加</a-button>
    <a-button size="small" @click="dec">减少</a-button>
    <a-button size="small" @click="set(50)">设置</a-button>
    <a-button size="small" @click="reset">重置</a-button>
    <a-button size="small" @click="delayInc(2000)">延迟加</a-button>
    <a-button size="small" @click="delayDec(2000)">延迟减</a-button>
    <a-button size="small" @click="stepInc(5)">按数量加</a-button>
    <a-button size="small" @click="stepDec(5)">按数量减</a-button>
    {{ count }}
    <br /><br />
    <h2>本地存储</h2>
    {{ getMessage() }}
    <a-button @click="setMessage">存储localStorage</a-button>
    <a-button @click="clearMessage">清除localStorage</a-button>
    <a-button>sessionStorage同理</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMouse } from '@/hooks/useMouse'
import { useDate } from '@/hooks/useDate'
import { useCounter } from '@/hooks/useCounter'
import { useLocalStorage, useSessionStorage } from '@/hooks/useStorage'
interface Data {}

export default defineComponent({
  name: 'Hooks',
  components: {},
  props: {},
  setup() {
    let { x, y } = useMouse()
    let { now } = useDate()
    let current = ref<number>(0)
    // let {getMessage, setMessage, clearMessage} = useLocalStorage('user-message', 'Hello~')
    let { getMessage, setMessage, clearMessage } = useLocalStorage('user-obj', {
      name: 'Hello~'
    })
    let {
      count,
      inc,
      dec,
      set,
      reset,
      delayInc,
      delayDec,
      stepDec,
      stepInc
    } = useCounter(current.value, { min: 0, max: 100 })
    return {
      x,
      y,
      now,
      count,
      inc,
      dec,
      reset,
      set,
      delayInc,
      delayDec,
      stepInc,
      stepDec,
      setMessage,
      clearMessage,
      getMessage
    }
  }
})
</script>

<style scoped lang="scss">
.ant-btn {
  margin: 3px !important;
}
</style>
