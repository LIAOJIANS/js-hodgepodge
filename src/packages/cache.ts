import { logError } from "../utils/Error"
import typeOf from "../utils/typeOf"

/*
  * 存入storage缓存
  * @param key number | string 键值
  * @param value any 值
  * @param distance number 缓存有效期
  *
  * */
export function setLocalStorage<T extends { value: any, distance?: number | string, key: string }>({
  distance,
  value,
  key
}: T): void {
  localStorage.setItem(key, distance ? JSON.stringify({
    distance,
    value,
    date: new Date().getTime()
  }) : value)
}


/*
* 取出storage缓存
* @param key number | string 键值
* */
export function getLocalStorage<T>(key: string): T {

  const data = JSON.parse(<string>localStorage.getItem(key))

  if (typeof data === 'string') {
    return data as any as T
  }

  const {
    date,
    distance
  } = data as { value: any, distance: number | string, date: number }

  if (new Date().getTime() - date > distance) { // 删除缓存，并且报错通知
    logError('The cache value has expired！')
    removeLocalStorage(key)

    return false as any
  }


  return data.value as T
}

/*
  * 删除storage缓存
  * @param key number | string 键值
  * */

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key)
}

export function setCooick(key: string, val: any, attributes: { path?: string, expires?: [number, string], [key: string]: any }): void {

  if(typeOf(document) === 'undefined') {
    return
  }
  
  
}


export default {
  setLocalStorage,
  getLocalStorage
}