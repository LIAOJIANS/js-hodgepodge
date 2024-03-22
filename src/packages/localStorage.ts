import { logError } from "../utils/Error"

/**
  * 存入storage缓存
  * @param key number | string 键值
  * @param value any 值
  * @param distance number 缓存有效期
  *
  * */
export function setLocalStorage<T extends { value: string, distance?: number | string, key: string }>({
  value,
  key,
  distance
}: T): void {

  if (!key || !value) {
    logError('Please pass in the corresponding key or value!')
  }

  localStorage.setItem(key, distance ? JSON.stringify({
    distance,
    value,
    date: new Date().getTime()
  }) : value)

}


/**
* 取出storage缓存
* @param key number | string 键值
* */
export function getLocalStorage<T>(key: string): T | boolean {

  const data = JSON.parse(<string>localStorage.getItem(key))

  if (typeof data === 'string' || !data) {
    logError('The cache value has expired or the key is wrong！')
    return data
  }

  const {
    date,
    distance
  } = data as { value: string, distance: number | string, date: number }

  if (Date.now() - date > distance) { // 删除缓存，并且报错通知
    removeLocalStorage(key)

    return false
  }


  return data.value
}

/**
  * 删除storage缓存
  * @param key number | string 键值
  * */

 export function removeLocalStorage(key: string) {
  localStorage.removeItem(key)
}