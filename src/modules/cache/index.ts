import {
    objInter,
    localInter,
    onlyKet
} from './interface'

export default class Cache {

    public setLocalStorage: localInter = (key, value, distance) => {
        let obj: objInter = {
            distance: distance,
            value: value,
            now: new Date().getTime()
        }
        // @ts-ignore
        localStorage.setItem(key, JSON.stringify(obj))
    }

    public getLocalStorage: onlyKet = (key) => {
        const obj: objInter = JSON.parse(<string>localStorage.getItem(key))
        const now: number = new Date().getTime()
        if (!obj) throw new Error(`No value with ${key} as key value`)
        if (obj.now && now - obj.now > obj.distance) {
            return this.removeLocalStorage(key)
        }
        return obj
    }

    public removeLocalStorage: onlyKet = (key) => {
        localStorage.removeItem(key)
    }

}
