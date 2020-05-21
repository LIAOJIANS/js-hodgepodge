import Time from './modules/Time'
import Tas from './modules/tas'
import Cache from './modules/cache'

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

console.log('time' + time.getTime(textData))


console.log(time.dateFormat({
    time: textData,
    formatStr: '{Y}-{MM}-{DD} {A} {t}:{ii}'
}))



let tas = new Tas()

let count = 0

// @ts-ignore
window.onscroll = tas.debounce(() => {
    count++
    console.log(count)
}, 10000)


let cache = new Cache()

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
    Time,
    Tas
}
