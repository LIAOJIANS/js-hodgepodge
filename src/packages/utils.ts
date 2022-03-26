export type tasInterface = (func: any, aw?: number) => Function

// 节流
export const throttle: tasInterface = (
  func,
  aw = 200
) => {
  let lastTime: number = 0
  return (...args: IArguments[]) => {
    let now = new Date().getTime()
    if (now - lastTime > aw) {
      func.apply(this, args)
      lastTime = now
    }
  }
}

// 防抖
export const debounce: tasInterface = (func, awai = 200) => {
  let timer: any = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, awai)
  }
}

// 延迟执行
export const delay = <T>(dur: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, dur)
  })
}

// 获取标准URL上的参数
export const getUrlKey = <T extends string>(name: T): string | null | undefined => decodeURIComponent(((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1] as any).replace(/\+/g, '%20')) || null

// 缓存函数
export const cached = <T extends Function>(fn: T): Function => {
  let cache = Object.create(null);
  return function cachedFn(str: any) {
    let hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

// 首字母大写
export const capitalize = <T extends string>(val: T): string => val.charAt(0).toUpperCase() + val.slice(1)

// 数据类型检测
export const isStatic = <T>(val: T): boolean => {
  return (
    typeof val === 'string' ||
    typeof val === 'number' ||
    typeof val === 'boolean' ||
    typeof val === 'undefined' ||
    val === null
  )
}

// 获取数据类型
export const getRawType = <T>(val: T): string => Object.prototype.toString.call(val).slice(8, -1)

// 数组去重
export const unique = <T extends number[]>(arr: T) => {
  if (!Array.isArray(arr)) { // 不是类数组对象
    return arr
  }
  let resultArr: any[] = []
  let oar: any[] = []
  let obj = Object.create(null)
  arr.forEach(item => {
    if (isStatic(item)) { // 是除了symbol外的原始数据
      let key = item + '_' + getRawType(item);
      if (!obj[key]) {
        obj[key] = true
        resultArr.push(item)
      }
    } else { // 引用类型及symbol
      if (!oar.includes(item)) {
        oar.push(item)
        resultArr.push(item)
      }
    }
  })
  return resultArr
}