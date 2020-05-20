
import Time from './modules/Time'

let textData: number = new Date().getTime()
let textTime: Date = new Date()
let time = new Time()

console.log(time.getHoroscope(textData))
console.log(time.sumAge({
    isTimestamp: false,
    time: '2020/4/20 13:26:40'
}))
console.log(time.getChatTime({
    oTime: 1587360400,
    nTime: 1589963293,
    differ: 300
}))
