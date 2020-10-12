<template>
  <div class="flex a-center mb-2">
    <a-button class="mr-2" type="primary" @click="flag=true">打开内嵌网页</a-button>
    <a-button class="mr-2" type="primary" @click="flag=false">关闭内嵌网页</a-button>
  </div>
  <iframe-view :src="src" v-if="flag"></iframe-view>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

interface Data {
  flag: boolean,
  src: string
}

export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props: any, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      flag: false,
      src: 'https://www.baidu.com'
    })
    let open = () => {

    }
    return {
      ...toRefs(data),
      open
    }
  }
})
</script>

<style scoped lang="scss"></style>
