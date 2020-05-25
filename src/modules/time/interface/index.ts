/*
* sumAge 接口
*
* */
interface TimeFormal {
    isTimestamp: boolean,
    startTime: any,
    type?: any,
    endTime?: any,
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

type dayInter = (formatStr?: string) => any

type numberInter = () => number

type stringInter = () => string

type cycleInter = (formatStr?: string) => object

type getDateInter = (time: Date, count: number) => string

export {
    TimeDiffer,
    TimeFunc,
    TimeOptionsFunc,
    Format,
    dayInter,
    numberInter,
    stringInter,
    cycleInter,
    getDateInter
}
