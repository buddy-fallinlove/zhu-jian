<template>
  <div class="container">
    <iframe class="iframe" :src="src"></iframe>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

interface Props {

}

interface Data {

}

export default defineComponent({
  name: "IframeView",
  components: {},
  props: {
    // 网址路径
    src: {
      type: String,
      required: true
    }
  },
  setup(props: Props, ctx: SetupContext) {
    let data: Data = reactive<Data>({})
    return {
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}
.iframe {
  width: 100%;
  height: 100%;
}
</style>
