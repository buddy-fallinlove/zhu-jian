<template>
  <a-input style="width: 600px;margin-right: 20px;" v-model:value="value" placeholder="请输入文字或者网址"></a-input>
  <a-button type="primary" @click="handleClick">生成二维码</a-button>
  <br>
  <br>
  <div v-if="qrcodeUrl">
    <h2>不设置宽高</h2>
    <qrcode  :qrcodeUrl="qrcodeUrl"></qrcode>
  </div>
  <br>
  <div v-if="qrcodeUrl">
    <h2>设置宽高</h2>
    <qrcode  :qrcodeUrl="qrcodeUrl" :width="500" :height="500"></qrcode>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

interface Data {
  qrcodeUrl: string,
  value: string
}

export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      qrcodeUrl: '',
      value: ''
    })
    let handleClick = () => {
      data.qrcodeUrl = data.value
      console.log(data.qrcodeUrl)
    }
    return {
      ...toRefs(data),
      handleClick,
    }
  }
})
</script>

<style scoped lang="scss"></style>
