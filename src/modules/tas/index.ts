

export default class Tas {
    /*
    * 一个节流函数
    * @params: func function 一个业务逻辑回调
    * @params: awai number 间隔多少毫秒调用一次
    *
    * */
    public throttle: tasInterface = (func, awai = 200) => {
        let lastTime: number = 0
        // @ts-ignore
        return (...args: Array) => {
            let now: number = new Date().getTime()
            if(now - lastTime > awai) {
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
        // @ts-ignore
        return (...args: Array) => {
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args)
            }, awai)
        }
    }



}

type tasInterface = (func: any, awai?: number) => void
