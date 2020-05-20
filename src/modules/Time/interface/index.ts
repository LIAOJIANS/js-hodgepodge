/*
* sumAge 接口
*
* */
interface TimeFormal {
    isTimestamp: boolean,
    time: any,
    type?: any,
    [prop: string]: any
}

interface TimeDiffer {
    oTime: number,
    nTime: number,
    differ: number
}

interface FormatTime {
    time: number,
    formatStr: string,
    [prop: string]: any
}

type TimeFunc = (data: number) => string

type TimeOptionsFunc = (options: TimeFormal) => string

export {
    TimeFormal,
    TimeDiffer,
    FormatTime,
    TimeFunc,
    TimeOptionsFunc
}
