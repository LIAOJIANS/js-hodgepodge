export interface TimeFormal {
    startTime: number | string | Date;
    endTime?: number | string | Date;
    type?: 'day' | 'hours' | 'minutes' | 'seconds' | 'HoursMinutes' | 'HoursMinutesSeconds' | 'timeHours' | 'timeHoursMinutes';
}
export declare type TimeOptionsFunc = (options: TimeFormal) => string | null;
export declare type dateType = (date: number | string | null) => string | null;
/**
 * 计算星座
 * @param date number | string(2021-11-30 10:20:30) | date
 * @returns ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯'] 其中一个
 */
export declare const getHoroscope: dateType;
/**
 * 时间差
 * @param options { startTime: string | number | null, endTime?: string | number | null, type?: ~~ }
 * @returns stirng | null
 */
export declare const dateDifference: TimeOptionsFunc;
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
export declare function dateFormat(date: number | string | Date, formatStr?: string): string | null;
/**
 * 获取当前时间并格式化
 * @param formatStr string 格式化规则  如上
 * @returns string 格式化后的时间
 */
export declare function getTime(formatStr?: string): string;
/**
 * 获取本月的最后一天
 * @param type string 返回类型 date -- 标准日期格式  day -- 当月最后一天  formatDate -- 格式化后的时间
 * @param formatStr string 格式化规则
 * @returns 返回的时间格式
 */
export declare function getLastDayOfMonth(type?: 'date' | 'day' | 'formatDate', formatStr?: string): number | string | Date | null;
/**
 * 当月季度的第一天
 * @param type
 * @param formatStr
 * @returns
 */
export declare function getFirstDayOfSeason(type?: 'date' | 'formatDate', formatStr?: string): string | Date | null;
export declare const getWeek: () => string;
export declare const getYearDay: () => number;
export declare const getYearWeek: () => number;
export declare function remainderTime(): number;
/**
 * 获取N天后的日期
 * @param count
 * @param date
 * @returns
 */
export declare function getAfterCountDays(count: string | number, date: number | Date | string): string | Date | null;
declare const _default: {
    getHoroscope: dateType;
    dateDifference: TimeOptionsFunc;
    dateFormat: typeof dateFormat;
    getTime: typeof getTime;
    getLastDayOfMonth: typeof getLastDayOfMonth;
    getFirstDayOfSeason: typeof getFirstDayOfSeason;
    getWeek: () => string;
    getYearDay: () => number;
    getYearWeek: () => number;
};
export default _default;
