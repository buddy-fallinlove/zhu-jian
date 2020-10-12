<template>
  <h2>底部工具栏</h2>
  <foot-tool-bar>
    <template v-slot:left>
      这是一段内容
    </template>
    <template v-slot:right>
      <a-button class="mr-1">取消</a-button>
      <a-button type="primary">确定</a-button>
    </template>
  </foot-tool-bar>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

interface Props {

}

interface Data {

}

export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props: Props, ctx: SetupContext) {
    let data: Data = reactive<Data>({})
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="scss">

</style>
