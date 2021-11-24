
/*
  * 给双位数补0
  * @params num: 转换的值
  * */
function parseNumber(num: number): number {
    return num < 10 ? 0 + num : num;
}

/*
* 判断时间戳长度
* @params data: 时间戳
* */
function _timeFormat<T>(data: T): number | T{
    // @ts-ignore
    return data.toString().length < 13 ? data * 1000 : data
}

/*
* 时间跨度定位
* @params timeSpan number 年转换
*
* */
type timeSpanInter = (timeSpan?: number) => number
const timeSpanPositioning: timeSpanInter = (timeSpan = 1) =>  {
    // @ts-ignore
    return Math.ceil(( new Date() - new Date(new Date().getFullYear().toString())) / ( 24*60*60*1000) / timeSpan)
}

function convertTimestamps(time: string): number {
    return new Date(time.replace(/-/g, "/")).getTime()
}

export  {
    parseNumber,
    _timeFormat,
    timeSpanPositioning,
    convertTimestamps
}
