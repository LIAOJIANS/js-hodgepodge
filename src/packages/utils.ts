import typeOf from "./typeOf"

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
export const getUrlKey = 
  <T extends string>(name: T): string | null | undefined => 
    decodeURIComponent(
      (
        (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1] as any)
          .replace(/\+/g, '%20')
    ) || null

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


// 一维数组转为二维指定长度的数组
export const recomArrs = <T>(
  data: any[] | T[],
  dim?: number
): Array<T> => {

  if(!dim) { 
    dim = 2 
  }

  const arr = new Array(Math.ceil(data.length / dim)).fill([])
  
  let index = 0
  data.forEach((c, i) => {
    arr[index] = [
      ...arr[index],
      c
    ]
    if ((i + 1) % dim! === 0) {
      index += 1
    }
  })

  return arr
}

// 指定字符串对象、数组转为标准Json
export const strJson = <T>(
  str: string
): T => {

  if(typeOf(str) !== 'string') {
    return str as any
  }

  try {
    return JSON.parse(str)
  } catch {
    return (new Function(`return ${str}`)())
  }
}

// 基于Window环境下的事件分发
export function createEventHandler<DataType>(name: string) {

  const addEventListener = (
    Win: Window,
    fn: (e: { detail: DataType }) => void
  ) => {
    // @ts-ignore
    Win.addEventListener(name, fn)

    // @ts-ignore
    const eject = () => Win.removeEventListener(name, fn)

    return eject
  }

  const dispatch = (
    Win: Window,
    data: DataType
  ) => {
    Win.dispatchEvent(
      new CustomEvent(name, { detail: data })
    )
  }

  return {
    addEventListener,
    dispatch
  }

}

export interface Defer {
  (): {
    resolve: () => void,
    reject: (...args: any[]) => void,
    promise: Promise<void>
  },

  <T>(): {
    resolve: (val: T) => void,
    reject: (...args: any[]) => void,
    promise: Promise<T>
  },
}

// 统一Promise状态
export const defer: Defer = () => {
  const dfd = {} as any

  dfd.promise = new Promise((
    reslove,
    reject
  ) => {
    dfd.reslove = reslove as any
    dfd.reject = reject
  })

  return dfd
}

