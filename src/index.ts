import Time from './modules/time'
import Tools from './modules/tools'
import Cache from './modules/cache'
import Check from './modules/reCheck'

let check = new Check()
let tools = new Tools()
let cache = new Cache()
let time = new Time()

export {
  tools,
  cache,
  time,
  check
}

// console.log(check.checkPhone(13428052268)) // true
// console.log(check.checkPhone(11111111111)) // false
//
// console.log(check.checkEmail('272781702@qq.com')) // true
// console.log(check.checkEmail(1111))
//
// console.log(check.checkUrl('http://www.baodu.com')) // true
// console.log(check.checkUrl('http:www.baodu.com')) // false
//
//
// console.log(check.checkNotSpecial({
//   start: 8,
//   end: 10,
//   val: 'Ab12345678'
// }))
// console.log(check.checkNotSpecial({
//   start: 8,
//   end: 10,
//   val: 'Ab12345'
// }))

// console.log(check.checkNonzeroNegative(-123245)) // true
// console.log(check.checkNonzeroNegative(123)) // false


// let count = 0
// // @ts-ignore
// window.addEventListener('scroll', tools.throttle((a = 2, b = 3) => {
//   console.log('count' + count, ' 参数a '+ 2 , ' 参数b '+ 3)
//   count += 1
// }, 350))
//
// // @ts-ignore


let count = 5
// @ts-ignore
document.querySelector('.btn').addEventListener('click', function () {
  // @ts-ignore
  tools.cached(res => {
    count += 5
    console.log('res' + res) // 旧值
    console.log('count' + count) // 新值
  })(count)

})

console.log(tools.getExplorerInfo()) // {type: "Chrome", version: 78}

const a = [1, 1, 2]
console.log(tools.unique(a)) // [1, 2]

// @ts-ignore
console.log(tools.viewWebPagePerformance())

