<template>
  <template v-if="Array.isArray(imgUrl)">
    <div class="flex a-center">
      <div @click="previewImgs(item, index)" class="c-p mr-1 ml-1" v-for="(item, index) in imgUrl" :key="index">
        <img :src="item" alt="" width="200" height="200">
      </div>
    </div>
    <div class="imgs" v-if="flag">
      <img
          @click="clickPreviewImgs(imgUrl[activeIndex])"
          :style="{transform: `scale(${scale}) rotate(${deg}deg)`}"
          :src="imgUrl[activeIndex]" alt="" width="400"
          height="400">
      <div class="flex a-center" style="position: relative">
        <RightOutlined class="right c-p" @click="right"/>
        <LeftOutlined class="left c-p" @click="left"/>
      </div>
    </div>
    <div class="mask flex a-center j-center" v-if="flag" @click="markClose">
      <div class="close c-p" @click="close" v-if="!isMark">
        <CloseOutlined/>
      </div>
      <div class="toolbar flex a-center j-center c-p">
        <div @click.stop="magnify" class="h-active">
          <a-tooltip>
            <template v-slot:title>
              放大
            </template>
            <ZoomInOutlined/>
          </a-tooltip>
        </div>
        <div class="ml-2 h-active" @click.stop="shrink">
          <a-tooltip>
            <template v-slot:title>
              缩小
            </template>
            <ZoomOutOutlined/>
          </a-tooltip>
        </div>
        <div class="ml-2 mr-2 h-active" @click.stop="clockwise">
          <a-tooltip>
            <template v-slot:title>
              顺时针旋转
            </template>
            <RedoOutlined/>
          </a-tooltip>
        </div>
        <div @click.stop="anticlockwise" class="h-active">
          <a-tooltip>
            <template v-slot:title>
              逆时针旋转
            </template>
            <UndoOutlined/>
          </a-tooltip>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div @click="preview" class="c-p" style="z-index: 999">
      <img :src="imgUrl" alt=""/>
    </div>
    <img
        v-if="flag"
        class="img"
        @click="clickPreviewImg"
        :src="imgUrl" alt=""
        :style="{transform: `scale(${scale}) rotate(${deg}deg)`}"/>
    <div class="mask flex a-center j-center" v-if="flag" @click="markClose">
      <div class="close c-p" @click="close" v-if="!isMark">
        <CloseOutlined/>
      </div>
      <div class="toolbar flex a-center j-center c-p">
        <div @click.stop="magnify" class="h-active">
          <a-tooltip>
            <template v-slot:title>
              放大
            </template>
            <ZoomInOutlined/>
          </a-tooltip>
        </div>
        <div class="ml-2 h-active" @click.stop="shrink">
          <a-tooltip>
            <template v-slot:title>
              缩小
            </template>
            <ZoomOutOutlined/>
          </a-tooltip>
        </div>
        <div class="ml-2 mr-2 h-active" @click.stop="clockwise">
          <a-tooltip>
            <template v-slot:title>
              顺时针旋转
            </template>
            <RedoOutlined/>
          </a-tooltip>
        </div>
        <div @click.stop="anticlockwise" class="h-active">
          <a-tooltip>
            <template v-slot:title>
              逆时针旋转
            </template>
            <UndoOutlined/>
          </a-tooltip>
        </div>
      </div>
    </div>
  </template>

</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from "vue"
import clickoutside from '@/utils'

interface Data {
  // 是否显示预览
  flag: boolean,
  // 缩放比例
  scale: number,
  // 旋转角度
  deg: number,
  // 当前预览图片下标
  activeIndex: number,
}

export default defineComponent({
  name: "Preview",
  components: {},
  emits: ['clickPreviewImg', 'clickPreviewImgs'],
  props: {
    // 图片路径 可以为数组
    imgUrl: {
      type: [String, Array]
    },
    // 点击遮罩层是否关闭
    isMark: {
      type: Boolean,
      default: true
    }
  },
  setup(props: any, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      flag: false,
      scale: 1,
      deg: 0,
      activeIndex: 0
    })
    // 点击预览
    const preview = () => {
      data.flag = !data.flag
    }
    // 点击关闭
    const close = () => {
      data.flag = !data.flag
      data.scale = 1
      data.deg = 0
      data.activeIndex = 0
    }
    // 放大
    const magnify = () => {
      data.scale += 0.1
      if (data.scale > 3) data.scale = 3
    }
    // 缩小
    const shrink = () => {
      data.scale -= 0.1
      if (data.scale < 0.1) data.scale = 0.1
    }
    // 顺时针
    const clockwise = () => {
      data.deg += 90
      if (data.deg === 360) data.deg = 0
    }
    // 逆时针
    const anticlockwise = () => {
      data.deg -= 90
      if (data.deg === -360) data.deg = 0
    }
    // 点击单个预览图片
    const clickPreviewImg = () => {
      ctx.emit('clickPreviewImg')
      data.flag = false
    }
    // 点击多个预览图片
    const clickPreviewImgs = (item: string) => {
      ctx.emit('clickPreviewImgs', item)
      data.flag = false
    }
    // 点击多图预览的预览图片
    const previewImgs = (item: string, index: number) => {
      data.activeIndex = index
      data.flag = true
    }
    // 预览右键
    const right = () => {
      data.activeIndex++
      if (data.activeIndex === props.imgUrl.length) {
        data.activeIndex = 0
      }
    }
    // 预览左键
    const left = () => {
      data.activeIndex--
      if (data.activeIndex === -1) {
        data.activeIndex = props.imgUrl.length - 1
      }
    }
    // 点击遮罩层关闭
    const markClose = () => {
      if (props.isMark) data.flag = false
    }
    return {
      ...toRefs(data),
      shrink,
      magnify,
      clockwise,
      anticlockwise,
      close,
      preview,
      clickPreviewImg,
      previewImgs,
      clickPreviewImgs,
      right,
      left,
      markClose
    }
  }
})
</script>

<style scoped lang="scss">
.img {
  position: absolute;
  top: 40%;
  left: 46%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: #fff;
  }

  .toolbar {
    position: absolute;
    bottom: 180px;
    left: 46%;
    transform: translateX(-26px);
    color: #fff;
    z-index: 999;
    font-size: 30px;
    width: 260px;
    height: 44px;
    background: hsla(0, 0%, 42.7%, .6);
    border-radius: 22px;

    .h-active {
      &:hover {
        transform: scale(1.3);
      }
    }
  }
}

.imgs {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.right {
  position: absolute;
  font-size: 50px;
  color: #fff;
  top: -230px;
  right: -100px;
  z-index: 999;
}

.left {
  position: absolute;
  font-size: 50px;
  color: #fff;
  top: -230px;
  left: -100px;
  z-index: 999;
}
</style>
