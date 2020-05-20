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

export type TimeFunc = (data: number) => string

export type TimeOptionsFunc = (options: TimeFormal) => string



