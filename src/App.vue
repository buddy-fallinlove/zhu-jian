<template>
  <div id="app">
    <a-back-top />
    <router-view />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
@import "./styles/base";
@import "./styles/common";
</style>
