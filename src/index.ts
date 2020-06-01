import Time from './modules/time'
import Tools from './modules/tools'
import Cache from './modules/cache'
import Check from './modules/reCheck'

let check = new Check()
let tools = new Tools()
let cache = new Cache()
let textData: number = new Date().getTime()
let textTime: Date = new Date()
let time = new Time()

console.log(time.getHoroscope(textData))


console.log('时间差' + time.timeDifference({
    isTimestamp: false,
    startTime: '2020/6/25 13:26:40',
    endTime: '2020/5/25 13:26:40'
}))


console.log(time.getChatTime({
    oTime: 1587360400,
    nTime: 1589963293,
    differ: 300
}))

console.log('time' + time.getTime(textData))
console.log('month' + time.getLastDayOfMonth())
console.log('季度第一天')
console.log(time.getFirstDayOfSeason())
console.log('周' + time.getWeek())
console.log('今天是今年的第几天' + time.getYearDay())
console.log('今天是今年的第几周' + time.getYearWeek())
console.log('今年还剩下几天' + time.lastDay())
console.log(time.getWeekCycle('{Y}-{MM}-{DD}'))
console.log('是否是时间区间' + time.isExist({
    lastTime: '2020-07-01 15:36:47',
    time: '2020-06-01 15:36:47'
}))

console.log('当前时间格式化' + time.dateFormat({
    time: textData,
    formatStr: '{Y}-{MM}-{DD} {A} {t}:{ii}'
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
document.querySelector('.btn').addEventListener('click',() => {
    console.log(cache.getLocalStorage('qeq'))
})


export {
    tools,
    cache,
    time
}
