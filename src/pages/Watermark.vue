<template>
  <a-button class="mr-2" @click="addWatermark('我是水印')" type="primary">增加水印</a-button>
  <a-button @click="addWatermark('')" type="primary">取消水印</a-button>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import {useWatermark} from "@/hooks/watermark"

interface Data {

}

export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props, ctx: SetupContext) {
    let {setWatermark} = useWatermark()
    let data: Data = reactive<Data>({})
    let addWatermark = (str: string) => {
      setWatermark(str)
    }
    return {
      ...toRefs(data),
      addWatermark
    }
  }
})
</script>

<style scoped lang="scss"></style>
