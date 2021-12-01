import { logError } from "./Error";
import typeOf from "./typeOf";

/*
  * 给双位数补0
  * @params num: 转换的值
  * */
function parseNumber(num: number): number {
  return num < 10 ? 0 + num : num;
}

/*
* 统一时间戳长度
* @params data: 时间戳
* */
function timeFormat<T>(data: T): number | T {
  // @ts-ignore
  return data.toString().length < 13 ? data * 1000 : data
}

/*
* 时间跨度定位
* @params timeSpan number 年转换
*
* */
type timeSpanInter = (timeSpan?: number) => number
const timeSpanPositioning: timeSpanInter = (timeSpan = 1) => {
  // @ts-ignore
  return Math.ceil((new Date() - new Date(new Date().getFullYear().toString())) / (24 * 60 * 60 * 1000) / timeSpan)
}

function convertTimestamps(time: string): number | null {
  if (/-/g.test(time)) {
    return new Date(time.replace(/-/g, "/")).getTime()
  } else {
    logError('The date format is incorrect. The recommended format is standard timestamp, or date, or XXXX-XX-XX HH: mm: SS')
    return null
  }

}

function dateUniFormat<T extends string | number | Date>(date: T): T | null {
  if(
    ['string', 'date', 'number'].indexOf(<string>typeOf(date)) === -1
  ) {
    logError(`Expected string、number、date type, but got ${typeOf(date)} type`)
    return null
  }

  if(typeOf(date) === 'number') {
    date = timeFormat(date) as T
  }

  return date
}


export {
  parseNumber,
  timeFormat,
  timeSpanPositioning,
  convertTimestamps,
  dateUniFormat
}
