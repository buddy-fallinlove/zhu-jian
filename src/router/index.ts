import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../pages/Home.vue"
import Layout from "@/pages/layout/Layout.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "",
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/preview',
        name: 'preview',
        component: () => import('@/pages/Preview.vue'),
        meta: {
          title: '图片预览'
        }
      },
      {
        path: '/trend',
        name: 'trend',
        component: () => import('@/pages/Trend.vue'),
        meta: {
          title: '趋势'
        }
      },
      {
        path: '/foottoolbar',
        name: 'foottoolbar',
        component: () => import('@/pages/FootToolBar.vue'),
        meta: {
          title: '底部工具栏'
        }
      },
      {
        path: '/noticeicon',
        name: 'noticeicon',
        component: () => import('@/pages/NoticeIcon.vue'),
        meta: {
          title: '通知菜单'
        }
      },
      {
        path: '/iframe',
        name: 'iframe',
        component: () => import('@/pages/IframeView.vue'),
        meta: {
          title: '内嵌网页'
        }
      },
      {
        path: '/countdown',
        name: 'countdown',
        component: () => import('@/pages/CountDown.vue'),
        meta: {
          title: '验证码按钮'
        }
      },
      {
        path: '/progress',
        name: 'progress',
        component: () => import('@/pages/AiProgress.vue'),
        meta: {
          title: '进度条拓展'
        }
      },
      {
        path: '/qrcode',
        name: 'qrcode',
        component: () => import('@/pages/Qrcode.vue'),
        meta: {
          title: '生成二维码'
        }
      },
      {
        path: '/copy',
        name: 'copy',
        component: () => import('@/pages/Copy.vue'),
        meta: {
          title: '文本复制'
        }
      },
      {
        path: '/watermark',
        name: 'watermark',
        component: () => import('@/pages/Watermark.vue'),
        meta: {
          title: '生成水印'
        }
      },
      {
        path: '/edittext',
        name: 'edittext',
        component: () => import('@/pages/EditText.vue'),
        meta: {
          title: '可编辑文字'
        }
      },
      {
        path: '/hooks',
        name: 'hooks',
        component: () => import('@/pages/Hooks.vue'),
        meta: {
          title: '常用hooks'
        }
      }
    ]
  }
]
const isPro = process.env.NODE_ENV === 'production'
const router =  createRouter({
  history: isPro ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
