<template>
  <a-menu @click="clickMenu" theme="light" mode="inline" v-model:selectedKeys="selectedKeys">
    <a-menu-item v-for="item in menus" :key="item.path">
      <component :is="item.icon"></component>
      {{item.name}}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import {useRoute, useRouter} from "vue-router"
import {MenuItem} from 'ant-design-vue/types/menu/menu-item.d'

interface Item {
  name: string,
  path: string,
  icon: string
}

interface Data {
  selectedKeys:string[],
  menus: Item[]
}

export default defineComponent({
  name: "NavLeft",
  components: {},
  props: {},
  setup(props, ctx: SetupContext) {
    let route = useRoute()
    let router = useRouter()
    let data: Data = reactive<Data>({
      selectedKeys: [route.path],
      menus: [
        {
          name: '首页',
          path: '/',
          icon: 'HomeOutlined'
        },
        {
          name: '常用hooks',
          path: '/hooks',
          icon: 'DeploymentUnitOutlined'
        },
        {
          name: '图片预览',
          path: '/preview',
          icon: 'ZoomInOutlined'
        },
        {
          name: '趋势',
          path: '/trend',
          icon: 'BarChartOutlined'
        },
        {
          name: '底部工具栏',
          path: '/foottoolbar',
          icon: 'ToolOutlined'
        },
        {
          name: '通知图标',
          path: '/noticeicon',
          icon: 'BellOutlined'
        },
        {
          name: '内嵌网页',
          path: '/iframe',
          icon: 'FundOutlined'
        },
        {
          name: '验证码按钮',
          path: '/countdown',
          icon: 'MessageOutlined'
        },
        {
          name: '进度条拓展',
          path: '/progress',
          icon: 'PaperClipOutlined'
        },
        {
          name: '生成二维码',
          path: '/qrcode',
          icon: 'QrcodeOutlined'
        },
        {
          name: '复制文本',
          path: '/copy',
          icon: 'CopyrightCircleOutlined'
        },
        {
          name: '生成水印',
          path: '/watermark',
          icon: 'BorderTopOutlined'
        },
        {
          name: '可编辑文字',
          path: '/edittext',
          icon: 'EditOutlined'
        },

      ]
    })
    const clickMenu = ({item, key}: {item: MenuItem, key: string}) => {
      router.push(key)
    }
    return {
      ...toRefs(data),
      clickMenu
    }
  }
})
</script>

<style scoped lang="scss"></style>
