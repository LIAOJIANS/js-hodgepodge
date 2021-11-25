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

interface FormatTime {
    time: number,
    formatStr?: string,
    [prop: string]: any
}

interface existModel {
    beginTime?: number | string,
    lastTime: number | string,
    time: number | string
}

interface dateObjModel {
    [pro: string]: any
}

type TimeFunc = (data: number, isDisplay?: boolean) => string

type TimeOptionsFunc = (options: TimeFormal) => string

type Format = (options: FormatTime) => string

type dayInter = (formatStr?: string) => any

type numberInter = () => number

type stringInter = () => string

type cycleInter = (formatStr?: string) => object

type getDateInter = (time: Date | number, count: number) => string

type existInter = (options: existModel) => boolean

export {
    dateObjModel,
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
