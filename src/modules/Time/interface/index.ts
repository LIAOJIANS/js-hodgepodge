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

interface TimeDiffer<T> {
    oTime: T,
    nTime: T,
    differ: T
}

interface FormatTime {
    time: number,
    formatStr: string,
    [prop: string]: any
}

type TimeFunc = (data: number) => string

type TimeOptionsFunc = (options: TimeFormal) => string

type Format = (options: FormatTime) => string

export {
    TimeFormal,
    TimeDiffer,
    FormatTime,
    TimeFunc,
    TimeOptionsFunc,
    Format
}
