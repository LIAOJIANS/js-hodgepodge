import { convertTimestamps, dateUniFormat, parseNumber, timeFormat, timeSpanPositioning } from '../utils/dataUtils';
import { ErrorMsg, logError } from '../utils/Error';
import typeOf from '../utils/typeOf';
import decopy from './decopy';

interface TimeFormal {
  startTime: number | string | Date
  endTime?: number | string | Date
  type?:
  | 'day'
  | 'hours'
  | 'minutes'
  | 'seconds'
  | 'HoursMinutes'
  | 'HoursMinutesSeconds'
  | 'timeHours'
  | 'timeHoursMinutes'
}
type TimeOptionsFunc = (options: TimeFormal) => string | null

type dateType = (date: number | string | null) => string | null

/**
 * 计算星座
 * @param date number | string(2021-11-30 10:20:30) | date
 * @returns ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯'] 其中一个
 */
export const getHoroscope: dateType = (date) => {
  if (!date) {
    logError('Date cannot be empty');
    return null;
  }

  if (!(date = dateUniFormat<number>(date as number)!)) {
    return null
  }

  const constellation: string[] = [
    '摩羯',
    '水瓶',
    '双鱼',
    '白羊',
    '金牛',
    '双子',
    '巨蟹',
    '狮子',
    '处女',
    '天秤',
    '天蝎',
    '射手',
    '摩羯',
  ];
  const timeTransformation: Date = new Date(date);
  const month = timeTransformation.getMonth() + 1;
  const day = timeTransformation.getDate();
  const range = { true: 1, false: 0 }[
    (day - 14 <
      ('865778999988'.charAt(month) as any as number)) as any as string
  ];
  return constellation[month - range!] + '座';
}

// 用户会传三种类型过来，必须规范输出类型 string 类型只支持 - 中位杠号分割日期

/**
 * 时间差
 * @param options { startTime: string | number | null, endTime?: string | number | null, type?: ~~ }
 * @returns stirng | null
 */
export const dateDifference: TimeOptionsFunc = (options) => {
  let { startTime, type, endTime } = decopy<TimeFormal>(options)

  if (!startTime) {
    logError('startTime cannot be empty！')
    return null
  }

  if (!(startTime = dateUniFormat(startTime)!)) {
    return null
  }

  if (typeOf(startTime) === 'string') {
    if (!!convertTimestamps(startTime as string)) {
      startTime = convertTimestamps(startTime as string) as number
    }
  }

  if (!!endTime && typeOf(endTime) === 'string') {
    if (!!convertTimestamps(endTime as string)) {
      endTime = convertTimestamps(endTime as string) as number
    }
  }

  const dateBegin: any = startTime
  const dateEnd: any = endTime || new Date().getTime()

  const dateDiff: number = Math.abs(dateEnd - dateBegin)
  const dayDiff: number = Math.floor(dateDiff / (24 * 3600 * 1000))
  const leave1: number = dateDiff % (24 * 3600 * 1000)
  const hours: number = Math.floor(leave1 / (3600 * 1000))
  const leave2: number = leave1 % (3600 * 1000)
  const minutes: number = Math.floor(leave2 / (60 * 1000))
  const leave3: number = leave2 % (60 * 1000)
  const seconds: number = Math.round(leave3 / 1000)

  switch (type) {
    case 'day':
      return dayDiff + '天';
    case 'hours':
      return hours + '小时';
    case 'minutes':
      return minutes + '分';
    case 'seconds':
      return seconds + '秒';
    case 'HoursMinutes':
      return hours + '小时 ' + minutes + '分';
    case 'HoursMinutesSeconds':
      return hours + '小时 ' + minutes + '分 ' + seconds + '秒 ';
    case 'timeHours':
      return dayDiff + '天 ' + hours + '小时';
    case 'timeHoursMinutes':
      return dayDiff + '天 ' + hours + '小时 ' + minutes + '分';
    default:
      return (
        dayDiff + '天 ' + hours + '小时 ' + minutes + '分 ' + seconds + '秒 '
      );
  }
}

/**
 * 时间格式化
 * @param date number | string | date 需要格式化的时间
 * @param formatStr: 格式化规则 如：{Y}-{MM}-{DD} {A} {t}:{ii}
 * @returns string
 * 
 * * {
  *  Y：年，
  *  M: 不补0的月,
  *  MM：补0的月
  *  Mon：大写月
  *  D: 日 如上
  *  DD：日 如上
  *  h：小时 如上
  *  hh：小时如上
  *  A：显示上午下午
  *  i：分钟
  *  ii: 分钟
  *  s：秒钟
  *  ss: 秒钟
  * }
 */
export function dateFormat(
  date: number | string | Date,
  formatStr: string = '{Y}-{MM}-{DD} {A} {t}:{ii}'
): string | null {
  if (!date) {
    logError('date cannot be empty！')
    return null
  }

  if (!(date = dateUniFormat<number>(date as number)!)) {
    return null
  }

  date = new Date(date)
  const mon = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  const hours = date.getHours()
  const t = hours > 12 ? hours - 12 : hours
  const dateObj = {
    'Y': date.getFullYear(),
    'M': date.getMonth() + 1,
    'MM': parseNumber(date.getMonth() + 1),
    'Mon': mon[date.getMonth()],
    'D': date.getDate(),
    'DD': parseNumber(date.getDate()),
    'h': hours,
    'hh': parseNumber(hours),
    't': t,
    'tt': parseNumber(t),
    'A': hours > 12 ? '下午' : '上午',
    'i': date.getMinutes(),
    'ii': parseNumber(date.getMinutes()),
    's': date.getSeconds(),
    'ss': parseNumber(date.getSeconds())
  } as Record<string, any>

  while (/\{([^}]+)\}/.test(formatStr)) {
    formatStr = formatStr.replace(/\{([^}]+)\}/, dateObj[RegExp.$1]);
  }

  return formatStr
}

/**
 * 获取当前时间并格式化
 * @param formatStr string 格式化规则  如上
 * @returns string 格式化后的时间
 */
export function getTime(formatStr = '{Y}-{MM}-{DD} {A} {t}:{ii}'): string {
  return dateFormat(new Date, formatStr)!
}

/**
 * 获取本月的最后一天
 * @param type string 返回类型 date -- 标准日期格式  day -- 当月最后一天  formatDate -- 格式化后的时间
 * @param formatStr string 格式化规则
 * @returns 返回的时间格式
 */
export function getLastDayOfMonth(
  type: 'date' | 'day' | 'formatDate' = 'date',
  formatStr = '{Y}-{MM}-{DD} {A} {t}:{ii}'
): number | string | Date | null {

  if (
    type === 'date' &&
    !formatStr
  ) {
    logError('formatStr is no value！！')
    return null
  }

  const date = new Date
  date.setMonth(date.getMonth() + 1)
  date.setDate(0)


  if (type === 'formatDate') {
    return dateFormat(new Date(date), formatStr)!
  } else if (type === 'date') {
    return new Date(date)
  } else if (type === 'day') {
    return date.getDate()
  }
  return null
}

/**
 * 当月季度的第一天
 * @param type 
 * @param formatStr 
 * @returns 
 */
export function getFirstDayOfSeason(
  type: 'date' | 'formatDate' = 'date',
  formatStr = '{Y}-{MM}-{DD} {A} {t}:{ii}'
) {
  if (
    type === 'date' &&
    !formatStr
  ) {
    logError('formatStr is no value！！')
    return null
  }

  const date = new Date()
  const month = date.getMonth()
  if (month < 3) {
    date.setMonth(0)
  } else if (2 < month && month < 6) {
    date.setMonth(3)
  } else if (5 < month && month < 9) {
    date.setMonth(6)
  } else if (8 < month && month < 11) {
    date.setMonth(9)
  }
  date.setDate(1)

  if (type === 'formatDate') {
    return dateFormat(new Date(date), formatStr)!
  } else if (type === 'date') {
    return new Date(date)
  }

  return null
}

export const getWeek = () => '日一二三四五六'.charAt(new Date().getDay())

/* 获取今天是当年的第几天 */
export const getYearDay = () => timeSpanPositioning(1)

/* 获取今天是当年的第几周 */
export const getYearWeek = () => timeSpanPositioning(7)

 /* 获取今年还剩下多少时间 */
export function remainderTime() {
  const data = new Date()
  const nextYear = (data.getFullYear() + 1).toString()
  let lastDay = new Date((new Date(nextYear) as any as number) - 1).getTime() // 获取本年的最后一毫秒；
  const diff = lastDay - (data as any as number)  // 毫秒数
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

/**
 * 获取N天后的日期
 * @param count 
 * @param date 
 * @returns 
 */
export function getAfterCountDays (
  count: string | number, 
  date: number | Date | string
  ) {

  if(!date) {
    logError('date is no value !!')
    return null
  }

  if(count == 0) {
    return new Date()
  }
 
  if (!(date = dateUniFormat<number>(date as number)!)) {
    return null
  }

  date = new Date(date)

  date.setDate(date.getDate() + (<number>count)) //获取N天后的日期

  return new Date(+date + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '-');
}

export default {
  getHoroscope,
  dateDifference,
  dateFormat,
  getTime,
  getLastDayOfMonth,
  getFirstDayOfSeason,
  getWeek,
  getYearDay,
  getYearWeek
}
