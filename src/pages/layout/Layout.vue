<template>
  <a-layout class="ant__menus">
    <a-layout-sider>
      <nav-left></nav-left>
    </a-layout-sider>
    <a-layout>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import NavLeft from "@/components/navLeft/NavLeft.vue"

interface Props {

}

interface Data {

}

export default defineComponent({
  name: "Layout",
  components: {
    NavLeft
  },
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
