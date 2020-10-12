<template>
  <img
      :src="qrcode" alt="二维码"
      :style="{width: width + 'px', height: height + 'px'}">
</template>


<script lang='ts'>
import {defineComponent, reactive, toRefs, onMounted} from 'vue'
import QRCode from 'qrcode'

interface Data {
  qrcode: string
}

export default defineComponent({
  name: 'Qrcode',
  components: {},
  props: {
    // 二维码路径或者文字
    qrcodeUrl: {
      type: String,
      required: true
    },
    // 生成之后的宽度
    width: {
      type: [String, Number],
      default: 120
    },
    // 生成之后的高度
    height: {
      type: [String, Number],
      default: 120
    }
  },
  setup(props) {
    let data: Data = reactive<Data>({
      qrcode: ''
    })
    // 生成二维码
    let makeQRCode = () => {
      QRCode.toDataURL(props.qrcodeUrl).then((imgData: string) => {
        if (imgData) {
          data.qrcode = imgData
        }
      })
    }
    onMounted(() => {
      makeQRCode()
    })
    return {
      ...toRefs(data),
      makeQRCode
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
