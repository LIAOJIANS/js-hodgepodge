import Time from './modules/time'
import Tools from './modules/tools'
import Cache from './modules/cache'
import Check from './modules/reCheck'

let check = new Check()
let tools = new Tools()
let cache = new Cache()
let textData: number = new Date().getTime()
console.log(textData)
let textTime: Date = new Date()
let time = new Time()

console.log(tools.Broswer())
console.log(time.getHoroscope(textData))


console.log('时间差' + time.timeDifference({
  isTimestamp: false,
  type: 'day',
  startTime: '2020/6/25 13:26:40',
  endTime: '2020/5/25 13:26:40'
}))


console.log('是否显示时间' + time.getChatTime({
  oTime: 1587360400,
  nTime: 1589963293,
  differ: 300
}))

console.log('time' + time.getTime(1587360400))
console.log(time.getTime(new Date().getTime(), true))
console.log('month' + time.getLastDayOfMonth())
console.log('季度第一天' + time.getFirstDayOfSeason())
console.log('周' + time.getWeek())
console.log('今天是今年的第几天' + time.getYearDay())
console.log('今天是今年的第' + time.getYearWeek() + '周')
console.log('今年还剩下'+ time.lastDay() +'天' )
console.log(time.getWeekCycle())
console.log('获取N天后的日期' + time.getDate(new Date(), 7))
console.log('是否是'+ time.getTime(new Date().getTime(), true) +'区间' + time.isExist({
  lastTime: '2020-07-01 15:36:47',
  time: '2020-06-01 15:36:47'
}))
console.log('是否是'+ time.getTime(new Date().getTime(), true) +'区间' + time.isExist({
  lastTime: 1592016303,
  time: 1591325103
}))

console.log('当前时间格式化' + time.dateFormat({
  time: textData
}))

let count = 0

// @ts-ignore
window.onscroll = tools.debounce(() => {
  count++
  console.log(count)
}, 10000)

cache.setLocalStorage('a', '1', 2000)
const obj = {
  a: 1
}
localStorage.setItem('qeq', JSON.stringify(obj))

// @ts-ignore
document.querySelector('.btn').addEventListener('click', () => {
  console.log(cache.getLocalStorage('qeq'))
})


export {
  tools,
  cache,
  time,
  check
}
