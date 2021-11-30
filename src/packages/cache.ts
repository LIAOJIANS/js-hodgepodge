import converter from "../utils/converter"
import { logError } from "../utils/Error"
import typeOf from "../utils/typeOf"

/**
  * 存入storage缓存
  * @param key number | string 键值
  * @param value any 值
  * @param distance number 缓存有效期
  *
  * */
export function setLocalStorage<T extends keyof { value: any, distance?: number | string, key: string }>(
  distance: T,
  value: T,
  key: T
): void {

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
export function getLocalStorage<T>(key: string): T {

  const data = JSON.parse(<string>localStorage.getItem(key))

  if (typeof data === 'string' || !data) {
    logError('The cache value has expired or the key is wrong！')
    return data as any as T
  }

  const {
    date,
    distance
  } = data as { value: any, distance: number | string, date: number }

  if (Date.now() - date > distance) { // 删除缓存，并且报错通知
    logError('The cache value has expired！')
    removeLocalStorage(key)

    return null as any
  }


  return data.value as T
}

/**
  * 删除storage缓存
  * @param key number | string 键值
  * */

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key)
}

/**
 * 注入cooick到浏览器
 * @param key 值的key
 * @param val 设置的值
 * @param attributes 扩展属性，如设置有效期{ expires: Date.now() + 30 * 24 * 60 * 60 * 1000 } --- 有效期一个月
 * @returns 
 */
export function setCooick(
  key: string,
  val: any,
  attributes: { path?: string, expires?: any, [key: string]: any }
): void | string {

  if (typeOf(document) === 'undefined') {
    return
  }

  attributes = Object.assign({}, { path: '/' }, attributes)

  if (typeOf(attributes.expires) === 'number') {
    attributes.expires = new Date(Date.now() + attributes.expires * 864e5)
  }

  attributes.expires = attributes.expires?.toUTCString()

  key = encodeURIComponent(key)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape)

  let stringifiedAttributes = ''
  for (const attributeName in attributes) {
    if (!attributes[attributeName]) {
      continue
    }

    stringifiedAttributes += '; ' + attributeName

    if (attributes[attributeName] === true) {
      continue
    }


    stringifiedAttributes += '=' + attributes[attributeName].split(';')[0]
  }

  return (document.cookie =
    key + '=' + converter.write(val) + stringifiedAttributes)

}

/**
 * 
 * @param key 需要获取cooick的key
 * @returns 获取的val值
 */
export function getCooick(key: string): any {
  const cookies = document.cookie ? document.cookie.split('; ') : []

  let jar: Record<string, string> = {}

  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=')
    const value = parts.slice(1).join('=')

    try {
      const found = decodeURIComponent(parts[0])
      jar[found] = converter.read(value)

      if (key === found) {
        break
      }
    } catch (e) { }
  }

  return key ? jar[key] : jar
}


/**
 * 
 * @param key 需要删除cooick的key
 * @param attributes 扩展属性
 */
export function removeCooick(
  key: string,
  attributes: { path?: string, expires?: any, [key: string]: any }
) {
  setCooick(key, '', { ...attributes, expires: -1 })
}

export default {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setCooick,
  getCooick,
  removeCooick
}