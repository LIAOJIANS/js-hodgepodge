import cache, { 
  setCooick,
  getCooick,
  removeCooick,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
} from 'js-hodgepodge/cache'

import decopy from 'js-hodgepodge/decopy'

import regExp from 'js-hodgepodge/regExp'

export const cooick = {
  setCooick,
  getCooick,
  removeCooick
}

export const storage = {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
}


export default {
  ...cache,
  ...regExp,
  regExp,
  decopy
}



// setLocalStorage()


// console.log(getLocalStorage('token'));

// console.log(setCooick('token', '111111'));

// console.log(removeCooick('token'));

// getCooick()

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


// let count = 5
// // @ts-ignore
// document.querySelector('.btn').addEventListener('click', function () {
//   // @ts-ignore
//   tools.cached(res => {
//     count += 5
//     console.log('res' + res) // 旧值
//     console.log('count' + count) // 新值
//   })(count)

// })

// console.log(tools.getExplorerInfo()) // {type: "Chrome", version: 78}

// const a = [1, 1, 2]
// console.log(tools.unique(a)) // [1, 2]

// // @ts-ignore
// console.log(tools.viewWebPagePerformance())



