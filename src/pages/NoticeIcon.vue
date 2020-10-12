<template>
  <h2>通知图标</h2>
  <br>
  <h3>普通通知</h3>
  <notice-icon :count="5" class="mr-2"></notice-icon>
  <br>
  <h3>消息超过99</h3>
  <notice-icon :count="190" class="mr-2"></notice-icon>
  <br>
  <h3>默认弹出菜单</h3>
  <notice-icon :count="102" class="mr-2">
    <template v-slot:content>
      默认正上方弹出菜单
    </template>
  </notice-icon>
  <br>
  <h3>控制菜单方向</h3>
  <notice-icon :count="10" placement="bottom">
    <template v-slot:content>
      可以控制菜单的方向
    </template>
  </notice-icon>
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

<style scoped lang="scss"></style>
