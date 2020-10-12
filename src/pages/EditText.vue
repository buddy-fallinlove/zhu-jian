<template>
  <edit-text text="jack" @ok="ok" @cancel="cancel"></edit-text>
  <br>
  <edit-text text="jack"></edit-text>
  <br>
  <edit-text text="tom"></edit-text>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import {message} from "ant-design-vue"

interface Data {

}

export default defineComponent({
  name: "",
  components: {},
  props: {},
  emits: ['ok', 'cancel'],
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({})
    let ok = () => {
      message.success('点击了确定')
    }
    let cancel = () => {
      message.info('点击了取消')
    }
    return {
      ...toRefs(data),
      ok,
      cancel
    }
  }
})
</script>

<style scoped lang="scss"></style>
