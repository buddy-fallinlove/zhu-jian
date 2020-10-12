<template>
  <div>
    <div class="flex a-center j-between content" v-if="lineData">
      <div class="c-per">{{percentage}}%</div>
      <div>
        <slot name="content"></slot>
      </div>
    </div>
    <div class="flex a-center" style="width: 100%">
      <div class="progress-container" ref="progressContainer">
        <div class="progress-content flex j-end"
             ref="progressContent"
             :style="{height: strokeWidth + 'px', background: bgColor}"
             v-if="isAnimate">
          <div class="textInside flex a-center j-center" v-if="textInside && !noData">{{percentage}}%</div>
        </div>
        <div v-if="!isAnimate" class="progress-content flex j-end"
             :style="{width: percentage + '%', height: strokeWidth + 'px', background: bgColor}">
          <div class="textInside flex a-center j-center" v-if="textInside && !noData">{{percentage}}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext, onMounted, nextTick, ref} from 'vue'

interface Data {
  startVal: number,
  width: number
}

export default defineComponent({
  name: "AiProgress",
  components: {},
  props: {
    // 进度条的值
    percentage: {
      type: Number,
      required: true
    },
    // 是否内联显示数据
    textInside: {
      type: Boolean,
      default: false
    },
    // 进度条高度
    strokeWidth: {
      type: [Number, String],
      default: 6
    },
    // 默认动画时长
    duration: {
      type: Number,
      default: 2000
    },
    // 是否有动画
    isAnimate: {
      type: Boolean,
      default: false
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#409eff'
    },
    // 是否不显示数据
    noData: {
      type: Boolean,
      default: false
    },
    // 是否自定义显示内容
    lineData: {
      type: Boolean,
      default: false
    },
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      startVal: 0,
      width: 0,
    })
    let progressContainer = ref<HTMLDivElement | null>(null)
    let progressContent = ref<HTMLDivElement | null>(null)
    onMounted(() => {
      if (props.isAnimate && progressContainer.value! && progressContent.value!) {
        nextTick(() => {
          let style = window.getComputedStyle(progressContainer.value!, null)
          let w: any = style.width.replace('px', '')
          let width = w  * (props.percentage * 1 / 100)
          progressContent.value!.style.width = width.toFixed(2) + 'px'
          progressContent.value!.style.transition = ` width ${props.duration / 1000}s ease`
        })
      }
    })
    return {
      ...toRefs(data),
      progressContainer,
      progressContent
    }
  }
})
</script>

<style scoped lang="scss">
.content {
  margin-bottom: 10px;
  color: #666;

  .c-per {
    font-size: 26px;
  }
}

.progress-container {
  width: 100%;
  background: #ebeef5;
  border-radius: 100px;

  .progress-content {
    border-radius: 100px;
    width: 0;
  }

  .textInside {
    color: #fff;
    margin-right: 5px;
  }
}

.percentage {
  margin-left: 6px;
  font-size: 12px;
  width: 30px;
}
</style>
