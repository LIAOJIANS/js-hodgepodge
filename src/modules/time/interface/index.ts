/*
* sumAge 接口
*
* */
interface TimeFormal {
    isTimestamp: boolean,
    startTime: any,
    type?: 'day' | 'hours' | 'minutes' | 'seconds' | 'HoursMinutes' | 'HoursMinutesSeconds' | 'timeHours' | 'timeHoursMinutes',
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

interface existNumber {
    beginTime?: number,
    lastTime: number,
    time: number
}

interface existString {
    beginTime?: string,
    lastTime: string,
    time: string
}

type TimeFunc = (data: number) => string

type TimeOptionsFunc = (options: TimeFormal) => string

type Format = (options: FormatTime) => string

type dayInter = (formatStr?: string) => any

type numberInter = () => number

type stringInter = () => string

type cycleInter = (formatStr?: string) => object

type getDateInter = (time: Date, count: number) => string

type existInter = (options: existNumber | existString) => boolean

export {
    TimeDiffer,
    TimeFunc,
    TimeOptionsFunc,
    Format,
    dayInter,
    numberInter,
    stringInter,
    cycleInter,
    getDateInter,
    existInter
}
