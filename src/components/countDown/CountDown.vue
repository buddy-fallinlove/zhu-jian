<template>
  <a-button @click="handleClick">
    {{text}}
  </a-button>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext, onMounted} from 'vue'


interface Data {
  time: number,
  text: string
}

export default defineComponent({
  name: "CountDown",
  components: {},
  props: {
    // 倒计时时间
    time: {
      type: Number,
      default: 60
    },
    text: {
      // 按钮默认文字
      type: String,
      default: '发送验证码'
    },
    sendText: {
      // 倒计时进行中的文字
      type: String,
      default: '后重新发送'
    },
    endText: {
      // 倒计时结束后的文字
      type: String,
      default: '重新发送'
    }
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      text: '',
      time: 0
    })
    // 点击发送
    let handleClick = () => {
      let timer = setInterval(() => {
        data.time--
        data.text = `${data.time}s${props.sendText}`
        if (data.time === 0) {
          clearInterval(timer)
          data.text = props.endText
          data.time = props.time
        }
      }, 1000)
    }
    onMounted(() => {
      // props为只读属性 不能直接修改
      data.text = props.text
      data.time = props.time
    })
    return {
      ...toRefs(data),
      handleClick
    }
  }
})
</script>

<style scoped lang="scss"></style>
