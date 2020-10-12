<template>
  <div class="container">
    <a-button type='primary' @click="visible=true">打开dialog</a-button>
    <ai-dialog v-model:visible='visible'></ai-dialog>
    <div>
      <h2>常用hooks</h2>
      <div>倒计时</div>
      <div>鼠标移动的位置</div>
      <div>计数器</div>
      <div>本地存储</div>
      <div>复制文本,需要传入文本</div>
      <div>生成水印,需要传入水印内容</div>
    </div>
    <br>
    <h2>图片预览</h2>
    <div>支持单图片和多图片</div>
    <div>传入参数</div>
    <ol>
      <li>imgUrl: 图片路径,支持字符串和数组</li>
      <li>isMark: 点击遮罩层是否关闭,布尔类型,默认为true</li>
    </ol>
    <div>事件</div>
    <ol>
      <li>clickPreviewImg: 点击单个预览图片</li>
      <li>clickPreviewImgs: 点击多个预览图片</li>
    </ol>
    <div>趋势组件</div>
    <div>表示上升和下降,颜色可反转</div>
    <div>传入参数</div>
    <ol>
      <li>type:趋势类型,字符串类型,支持up和down,默认为up</li>
      <li>isReserve:颜色是否反转,布尔类型,默认为false</li>
    </ol>
    <div>插槽</div>
    <ol>
      <li>默认插槽: 趋势幅度</li>
      <li>text: 文字描述</li>
    </ol>
    <br>
    <h2>底部工具栏</h2>
    <div>插槽</div>
    <ol>
      <li>left 左边内容</li>
      <li>right: 右边内容</li>
    </ol>
    <h2>通知图标</h2>
    <div>传入参数</div>
    <ol>
      <li>count: 通知个数</li>
      <li>placement: 内容位置,字符串,默认为top</li>
    </ol>
    <div>插槽</div>
    <ol>
      <li>content: 展开内容</li>
    </ol>
    <h2>内嵌网页</h2>
    <div>传入参数</div>
    <ol>
      <li>src: 网页路径, 字符串类型</li>
    </ol>
    <h2>验证码按钮</h2>
    <div>传入参数</div>
    <ol>
      <li>time: 倒计时秒数</li>
      <li>text: 按钮文字</li>
      <li>sendText: 倒计时进行时显示文字,默认后重新发送</li>
      <li>endText: 倒计时结束后显示文字,默认重新发送</li>
    </ol>
    <div>进度条拓展</div>
    <div>传入参数</div>
    <ol>
      <li>percentage: 进度条的值,数字类型</li>
      <li>textInside: 是否内联显示数据,布尔类型,默认false</li>
      <li>strokeWidth: 进度条高度,字符串或数字类型,默认为6</li>
      <li>duration: 动画时长,数字类型,默认2000</li>
      <li>isAnimate: 是否有动画,默认false</li>
      <li>bgColor: 背景颜色,字符串类型,默认#409eff</li>
      <li>noData: 是否不显示数据,默认为false</li>
      <li>lineData: 是否自定义显示内容,默认false</li>
    </ol>
    <h2>生成二维码</h2>
    <div>传入参数</div>
    <ol>
      <li>qrcodeUrl: 生成二维码路径</li>
      <li>width: 生成图片宽度,字符串或数字类型,默认120</li>
      <li>height: 生成图片高度,字符串或数字类型,默认120</li>
    </ol>
    <h2>可编辑文字</h2>
    <div>传入参数</div>
    <ol>
      <li>text: 文本内容</li>
    </ol>
    <div>事件</div>
    <ol>
      <li>ok: 点击确认</li>
      <li>cancel: 点击取消</li>
    </ol>
  </div>

</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import aiDialog from '../components/aiDialog/AiDialog.vue'
interface Data {
  visible: boolean
}

export default defineComponent({
  name: "Home",
  components: {
    aiDialog
  },
  props: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      visible: false
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  font-size: 18px;
  background: #fff;
  padding: 24px;
  ol {
    margin-left: 18px;
    color: #000;
  }
}
</style>
