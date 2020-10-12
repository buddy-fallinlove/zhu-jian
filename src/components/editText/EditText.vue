<template>
  <div v-if="flag">
    <a-input ref="iptRef" style="width: 300px;" v-model:value="text" @blur="handBlur"></a-input>
    <a-button class="mr-1 ml-1" type="primary" @click="ok" style="z-index: 99">确定</a-button>
    <a-button @click="cancel" style="z-index: 99">取消</a-button>
  </div>
  <div v-else @click="handleClick">
    {{text}}
  </div>

</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext, ref, nextTick, watch} from 'vue'
interface Data {
  flag: boolean
}

export default defineComponent({
  name: "EditText",
  components: {},
  props: {
    // 显示文本
    text: {
      type: String,
      required: true
    }
  },
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      flag: false
    })
    let iptRef = ref<any>(null)
    let handleClick = () => {
      data.flag = true
      nextTick(() => {
        iptRef.value.focus()
      })
    }
    let handBlur = () => {
      setTimeout(() => {
        data.flag = false
      }, 80)
    }
    let ok = () => {
      ctx.emit('ok')
      data.flag = false
    }
    let cancel = () => {
      ctx.emit('cancel')
      data.flag = false
    }
    return {
      ...toRefs(data),
      handleClick,
      handBlur,
      ok,
      cancel,
      iptRef
    }
  }
})
</script>

<style scoped lang="scss"></style>
