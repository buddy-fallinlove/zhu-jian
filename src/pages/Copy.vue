<template>
  <a-input style="width: 600px" placeholder="输入的内容会被复制" v-model:value="value"></a-input>
  <a-button class="ml-1" @click="copyStr" type="danger">复制</a-button>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import {message} from "ant-design-vue"
import {useCopy} from "@/hooks/copy"

interface Data {
  value: string
}

export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props, ctx: SetupContext) {
    let {copy} = useCopy()
    let data: Data = reactive<Data>({
      value: ''
    })
    let copyStr = () => {
      copy(data.value)
      message.success('复制成功')
    }
    return {
      ...toRefs(data),
      copyStr
    }
  }
})
</script>

<style scoped lang="scss"></style>
