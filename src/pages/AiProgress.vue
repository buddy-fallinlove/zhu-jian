<template>
  <div>
    <div class="container">
      <div class="item">
        <h2>普通进度条</h2>
        <ai-progress :percentage="35.5"></ai-progress>
      </div>
      <div class="item">
        <h2>普通进度条控制高度</h2>
        <ai-progress :percentage="62.3" :stroke-width="32"></ai-progress>
      </div>
      <div class="item">
        <h2>文字内显</h2>
        <ai-progress :percentage="70" :text-inside="true" :stroke-width="24"></ai-progress>
      </div>
      <div class="item">
        <h2>文字内显且控制高度</h2>
        <ai-progress :percentage="33.8" :text-inside="true" :stroke-width="32"></ai-progress>
      </div>
      <div class="item">
        <h2>自定义颜色</h2>
        <ai-progress :percentage="66" bg-color="#f46"></ai-progress>
      </div>
      <div class="item">
        <h2>不显示进度</h2>
        <ai-progress :percentage="66" bg-color="#f46" :noData="true"></ai-progress>
      </div>
      <div class="item">
        <h2>自定义显示内容</h2>
        <ai-progress :percentage="66" bg-color="#f46" :line-data="true">
          <template v-slot:content>转化率(日同比 66% )</template>
        </ai-progress>
      </div>
      <div class="item">
        <h2>进度条加载动画</h2>
        <ai-progress :percentage="50" bg-color="#f46" :is-animate="true"></ai-progress>
      </div>
      <div class="item">
        <h2>设置加载动画时间</h2>
        <ai-progress :percentage="50" bg-color="#f46" :is-animate="true" :duration="5000"></ai-progress>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

interface Data {

}

export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({})
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  width: 600px;
  h2 {
    margin-bottom: 10px;
  }
  .item {
    margin: 20px 0;
  }
}
</style>
