import {tasInterface, currencyInterface, explorerInfoModel} from './interface'

export default class Tas {
  /*
  * 一个节流函数
  * @params: func function 一个业务逻辑回调
  * @params: awai number 间隔多少毫秒调用一次
  *
  * */
  public throttle: tasInterface = (func, awai = 200) => {
    let lastTime: number = 0
    return (...args: any[]) => {
      let now: number = new Date().getTime()
      if (now - lastTime > awai) {
        func.apply(this, args)
        lastTime = now
      }
    }
  }

  /*
 * 一个防抖函数
 * @params: func function 一个业务逻辑回调
 * @params: awai number 间隔多少毫秒调用一次
 *
 * */
  public debounce: tasInterface = (func, awai = 200) => {
    let timer: any = null
    return (...args: any[]) => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, awai)
    }
  }

  /*
   获取路由参数上的地址
   @params: name key 要获取的变量名
   */
  public getUrlKey(name: string): any {
    // @ts-ignore
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  }

  /*
  * 判断数据是不是Object类型的数据
  * @params: val any 需要判断的对象
  * */
  public isObjectLike: currencyInterface<any> = (val) => {
    return Object.prototype.toString.call(val) === '[object Object]'
  }

  /*
  * 记忆函数：缓存函数的运算结果
  * @params: fn Function 回调函数
  *
  * */
  public cached(fn: Function): Function {
    let cache = Object.create(null);
    return function cachedFn(str: any) {
      let hit = cache[str];
      return hit || (cache[str] = fn(str))
    }
  }

  /*
  * 字符串首位大写
  * @param: str String 需要转换的值
  * */
  public capitalize: currencyInterface<string> = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1)
  }

  

  /*
 * 获取浏览器信息
 * */
  public getExplorerInfo(): explorerInfoModel {
    let t = navigator.userAgent.toLowerCase();
    return 0 <= t.indexOf("msie") ? { //ie < 11
      type: "IE",
      version: Number((t.match(/msie ([\d]+)/)as any)[1])
    } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? {
      type: "IE",
      version: 11
    } : 0 <= t.indexOf("edge") ? {
      type: "Edge",
      version: Number((t.match(/edge\/([\d]+)/) as any)[1])
    } : 0 <= t.indexOf("firefox") ? {
      type: "Firefox",
      version: Number((t.match(/firefox\/([\d]+)/) as any)[1])
    } : 0 <= t.indexOf("chrome") ? {
      type: "Chrome",
      version: Number((t.match(/chrome\/([\d]+)/) as any)[1])
    } : 0 <= t.indexOf("opera") ? {
      type: "Opera",
      version: Number((t.match(/opera.([\d]+)/) as any)[1])
    } : 0 <= t.indexOf("Safari") ? {
      type: "Safari",
      version: Number((t.match(/version\/([\d]+)/) as any)[1])
    } : {
      type: t,
      version: -1
    }
  }

  /* 检测客户端是手机还是PC
  *  true是PC， false 是手机端
  *  */
  public Broswer(): boolean {
    let e = navigator.userAgent.toLowerCase()
      // @ts-ignore
      , t = "ipad" == e.match(/ipad/i)
      // @ts-ignore
      , i = "iphone" == e.match(/iphone os/i)
      // @ts-ignore
      , r = "midp" == e.match(/midp/i)
      // @ts-ignore
      , n = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i)
      // @ts-ignore
      , a = "ucweb" == e.match(/ucweb/i)
      // @ts-ignore
      , o = "android" == e.match(/android/i)
      // @ts-ignore
      , s = "windows ce" == e.match(/windows ce/i)
      // @ts-ignore
      , l = "windows mobile" == e.match(/windows mobile/i);
    return !(t || i || r || n || a || o || s || l)
  }

  /*
  * 获取数据类型
  * @param: val 需要鉴定的值
  *
  * */
  public getRawType(val: any): string {
    return Object.prototype.toString.call(val).slice(8, -1)
  }

  /*
  * 检测数据是不是除了symbol外的原始数据
  * @param: val 需要鉴定的值
  * */
  public isStatic: currencyInterface<any> = (val) => {
    return (
      typeof val === 'string' ||
      typeof val === 'number' ||
      typeof val === 'boolean' ||
      typeof val === 'undefined' ||
      val === null
    )
  }

  /*
  * 数组去重，返回一个新数组
  * @param: arr Array 去重的数组
  * */
  public unique(arr: any[]): any[] {
    if (!Array.isArray(arr)) { // 不是类数组对象
      return arr
    }
    let resultArr: any[] = []
    let oar: any[] = []
    let obj = Object.create(null)
    arr.forEach(item => {
      if (this.isStatic(item)) { // 是除了symbol外的原始数据
        let key = item + '_' + this.getRawType(item);
        if (!obj[key]) {
          obj[key] = true
          resultArr.push(item)
        }
      } else { // 引用类型及symbol
        // @ts-ignore
        if (!oar.includes(item)) {
          oar.push(item)
          resultArr.push(item)
        }
      }
    })
    return resultArr
  }

  /*
    * 禁用浏览器右键功能
    * @param: type string 选择禁用的功能
    * */
  public disableCopySelection(type?: 'all' | 'contextmenu' | 'selectstart' | 'copy') {
    type = type || 'all';
    ['contextmenu', 'selectstart', 'copy'].forEach(function (ev) {
      if (type === ev) {
        document.addEventListener(ev, function (event) {
          return event.returnValue = false
        })
      }
      if (type === 'all') {
        document.addEventListener(ev, function (event) {
          return event.returnValue = false
        })
      }
    });
  }

  /*
   * 检查网页性能
   * @param: type string 选择禁用的功能
   * */
  public viewWebPagePerformance() {
    window.onload = function () {
      setTimeout(function () {
        let t = performance.timing
        console.log('DNS查询耗时 ：' + (t.domainLookupEnd - t.domainLookupStart).toFixed(0) + 'ms')
        console.log('TCP链接耗时 ：' + (t.connectEnd - t.connectStart).toFixed(0) + 'ms')
        console.log('request请求耗时 ：' + (t.responseEnd - t.responseStart).toFixed(0) + 'ms')
        console.log('解析dom树耗时 ：' + (t.domComplete - t.domInteractive).toFixed(0) + 'ms')
        console.log('白屏时间 ：' + (t.responseStart - t.navigationStart).toFixed(0) + 'ms')
        console.log('domready时间 ：' + (t.domContentLoadedEventEnd - t.navigationStart).toFixed(0) + 'ms')
        console.log('onload时间 ：' + (t.loadEventEnd - t.navigationStart).toFixed(0) + 'ms')
        // @ts-ignore
        if (t = performance.memory) {
          // @ts-ignore
          console.log('js内存使用占比 ：' + (t.usedJSHeapSize / t.totalJSHeapSize * 100).toFixed(2) + '%')
        }
      })
    }
  }
}
