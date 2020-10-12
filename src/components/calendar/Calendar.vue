<template>
  <div class="flex a-center j-end mb-2">
    <a-select @change="changeYear" v-model:value="year" style="width: 120px;margin-right: 15px">
      <a-select-option :value="item" v-for="item in yearArr" :key="item">
        {{item}}年
      </a-select-option>
    </a-select>
    <a-select @change="changeMonth" v-model:value="month" style="width: 120px">
      <a-select-option :value="item" v-for="item in 12" :key="item">
        {{item}}月
      </a-select-option>
    </a-select>
  </div>
    <!-- 日历头 -->
    <div class="calenderTitle">
      <div class="calenderItem" v-for="item of calenderTitle">{{item}}</div>
    </div>
    <!-- 日历内容 -->
    <div class="calenderInside">
      <div
          @click="hanleClick(item)"
           class="calenderItem c-p"
           :class="{now: (month + '-' + item) === dayjs().format('M-DD')}"
           v-for="item in calenderArray">
        <div class="content" :ref="item">
          <slot name="content"></slot>
        </div>
        <div class="date">{{item}}</div>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted, SetupContext, ref, getCurrentInstance} from 'vue'
import dayjs from "dayjs"

interface Data {
  timestamp: number,
  // 当前年份
  nowYear: number |string,
  // 当前月份
  nowMonth: number | string,
  // 当前日期
  nowDate: number,
  // 当前星期
  nowDay: number,
  // 日期标题
  calenderTitle: string[],
  // 日期内容
  calenderArray: string[],
  year: number | string,
  month: number | string,
  yearArr: string[]
}

export default defineComponent({
  name: "Calendar",
  components: {},
  props: {
    chooseYear: {
      type: Number,
      default: 10
    }
  },
  setup(props, ctx: SetupContext) {
    let instance = getCurrentInstance()
    let data: Data = reactive<Data>({
      timestamp: (new Date()).getTime(),
      // 当前年份
      nowYear: 0,
      // 当前月份
      nowMonth: 0,
      // 当前日期
      nowDate: 0,
      // 当前星期
      nowDay: 0,
      // 日期标题
      calenderTitle: ['日', '一', '二', '三', '四', '五', '六'],
      // 日期内容
      calenderArray: [],
      year:  (new Date().getFullYear()) + '',
      month: (new Date().getMonth() + 1),
      yearArr:[]
    })
    let container = ref<HTMLDivElement | null>(null)
    let getYears = () => {
      for (let i = props.chooseYear; i > 0; i--) {
        data.yearArr.push(dayjs().subtract(i, 'year').format('YYYY'))
      }
      data.yearArr.push(new Date().getFullYear() + '')
      for (let i = 1; i <= props.chooseYear; i++) {
        data.yearArr.push(dayjs().add(i, 'year').format('YYYY'))
      }
    }
    let isLeapYear = (year: number) => {
      return (year % 400 === 0 || year % 4 === 0) && year % 100 !== 0
    }
    let getNowMonthDay = (year: number, month: number) => {
      return [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28)
    }
    let getFirstDay = () => {
      let firstDayWeek: number = 0
      // 获取当月1号的星期
      firstDayWeek = new Date(data.nowYear + '/' + data.nowMonth + '/' + '01').getDay()
      // 当月天数
      let nowMonthDay = getNowMonthDay(data.nowYear as number, data.nowMonth as number)
      let arr = []
      // 根据当月1号的星期数来给渲染数组前面添加对应数量的空格
      for (let indexEmpty = 0; indexEmpty < firstDayWeek; indexEmpty++) {
        arr.push('')
      }
      // 通过函数判断当前月份有多少天,并根据天数填充渲染数组
      for (let indexNum = 1; indexNum < nowMonthDay + 1; indexNum++) {
        arr.push(indexNum)
      }
      // 深拷贝日历渲染数组(由于后期可能会改成签到日历,数组的每一项可能是object所以深拷贝)
      data.calenderArray = JSON.parse(JSON.stringify(arr))
    }
    let getNowDate = () => {
      // 将时间戳转换为日期对象
      const theTime = typeof (data.timestamp) === 'object' ? data.timestamp : new Date(data.timestamp)
      data.nowYear = theTime.getFullYear()
      data.nowMonth = theTime.getMonth() + 1
      data.nowDate = theTime.getDate()
      data.nowDay = theTime.getDay() // 星期日为0,其余星期对应数值
      getFirstDay()
    }
    let changeYear = (value: string) => {
      data.nowYear = value
      getFirstDay()
    }
    let changeMonth = (value: string) => {
      data.nowMonth = value
      getFirstDay()
    }
    let hanleClick = (val: string) => {
      data.calenderArray.map((item: string) => {
        if (val === item) {
          container.value!.innerHTML += '123'
        }
      })
      container.value!.innerHTML += '123'
    }
    console.log(instance)
    onMounted(() => {
      getNowDate()
      getYears()
    })
    return {
      ...toRefs(data),
      getNowDate,
      getFirstDay,
      isLeapYear,
      getNowMonthDay,
      getYears,
      changeYear,
      changeMonth,
      dayjs,
      hanleClick,
      container
    }
  }
})
</script>

<style scoped lang="scss">
.calenderTitle, .calenderInside {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.calenderTitle {
  .calenderItem {
    &:nth-child(-n + 7) {
      border-top: none !important;
    }
  }
}
.content {
  text-align: left !important;
}
.calenderItem {
  width: 13.28%;
  margin-right: 1%;
  height: 140px;
  text-align: right;
  border-top: 3px solid #eee;
  position: relative;
  &:hover {
    background: #e6f7ff !important;
  }
  .date {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.now {
  background: #e6f7ff !important;
  color: #1890ff !important;
  border-top-color: #1890ff !important;
}
</style>
