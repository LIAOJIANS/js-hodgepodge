
/*
  * 给双位数补0
  * @params num: 转换的值
  * */
function parseNumber(num: number): any {
    return num < 10 ? "0" + num : num;
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
let timeSpanPositioning: timeSpanInter = (timeSpan = 1) =>  {
    // @ts-ignore
    return Math.ceil(( new Date() - new Date(new Date().getFullYear().toString())) / ( 24*60*60*1000) / timeSpan)
}

export  {
    parseNumber,
    _timeFormat,
    timeSpanPositioning
}
