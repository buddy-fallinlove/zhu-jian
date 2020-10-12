<template>
  <!-- 对话框的遮罩 .self代表只有点击自己才触发 -->

  <div class="ai-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <div
      class="ai-dialog"
      :style="{ width, marginTop: top }"
      :class="{ leave: !visible }"
    >
      <div class="ai-dialog__header">
        <slot name="title">
          <span class="ai-dialog__title">{{ title }}</span>
        </slot>
        <button class="ai-dialog__headerbtn" @click="handleClose">
          <i class="ai-icon-close"></i>
        </button>
      </div>
      <div class="ai-dialog__body">
        <!-- 默认插槽 -->
        <slot></slot>
      </div>
      <div class="ai-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
export default defineComponent({
  name: 'AiDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx: SetupContext) {
    const handleClose = () => {
      ctx.emit('update:visible', false)
    }
    return {
      handleClose
    }
  }
})
</script>

<style lang="scss" scoped>
// scoped会给当前组件的模板中的所有的元素都添加一个随机的属性
// scoped会给当前组件中所有的样式 页添加一个对应的的属性选择器
.ai-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .ai-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    animation: fade 0.2s linear alternate;
    &__header {
      padding: 20px 20px 10px;
      .ai-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ai-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      // 深度选择器 scss ::v-deep  less /deep/  css >>>
      ::v-deep .ai-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.leave {
  animation: leave 0.2s linear alternate;
}
@keyframes leave {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>