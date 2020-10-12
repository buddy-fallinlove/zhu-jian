<template>
  <div class="toolbar flex a-center j-between">
    <div>
      <slot name="left"/>
    </div>
    <div>
      <slot name="right"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'

interface Props {

}

interface Data {

}

export default defineComponent({
  name: "FootToolBar",
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
.toolbar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 66px;
  padding: 0 24px;
  line-height: 56px;
  background: #fff;
  border-top: 1px solid #e8eaec;
  -webkit-box-shadow: 0 -1px 2px rgba(0,0,0,.03);
  box-shadow: 0 -1px 2px rgba(0,0,0,.03);
}
</style>
