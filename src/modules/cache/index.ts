import {
    objInter,
    localInter,
    onlyKet
} from './interface'

export default class Cache {
    /*
    * 存入storage缓存
    * @param key number | string 键值
    * @param value any 值
    * @param distance number 时间搓
    *
    * */
    public setLocalStorage: localInter = (key, value, distance) => {
        let obj: objInter = {
            distance: distance,
            value: value,
            now: new Date().getTime()
        }
        // @ts-ignore
        localStorage.setItem(key, JSON.stringify(obj))
    }

    /*
    * 取出storage缓存
    * @param key number | string 键值
    * */
    public getLocalStorage: onlyKet = (key) => {
        const obj: objInter = JSON.parse(<string>localStorage.getItem(key))
        const now: number = new Date().getTime()
        if (!obj) throw new Error(`No value with ${key} as key value`)
        if (obj.now && now - obj.now > obj.distance) {
            return this.removeLocalStorage(key)
        }
        return obj
    }

    /*
     * 删除storage缓存
     * @param key number | string 键值
     * */
    public removeLocalStorage: onlyKet = (key) => {
        localStorage.removeItem(key)
    }

}
