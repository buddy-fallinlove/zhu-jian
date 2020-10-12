<template>
  <calendar>
<!--    <template #content>-->
<!--      <div>我是一段话</div>-->
<!--      <div>我是一段话</div>-->
<!--      <div>我是一段话</div>-->
<!--    </template>-->
  </calendar>
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
