import { convertTimestamps } from '../utils/dataUtils';
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

type TimeFunc = (data: number, isDisplay?: boolean) => string | null;

type TimeOptionsFunc = (options: TimeFormal) => string | null;

/**
 * 计算星座
 * @param date number | string(2021-11-30 10:20:30) | date
 * @returns ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯'] 其中一个
 */
export const getHoroscope: TimeFunc & ((data: number | string | Date) => void) = (date) => {
  if (!date) {
    logError('Date cannot be empty');
    return null;
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
export const dateDifference: TimeOptionsFunc = (options) => {
  let { startTime, type, endTime } = decopy<TimeFormal>(options)

  if (!startTime) {
    logError('startTime cannot be empty！')
    return null
  }

  if (typeOf(startTime) === 'string') {
    if (!!convertTimestamps(startTime as string)) {
      startTime = convertTimestamps(startTime as string) as number
    }
  }

  if (typeOf(endTime) === 'string') {
    if (!!convertTimestamps(endTime as string)) {
      endTime = convertTimestamps(endTime as string) as number
    }
  }

  let dateBegin: any = startTime
  let dateEnd: any = endTime || new Date().getTime()

  let dateDiff: number = Math.abs(dateEnd - dateBegin);
  let dayDiff: number = Math.floor(dateDiff / (24 * 3600 * 1000));
  let leave1: number = dateDiff % (24 * 3600 * 1000);
  let hours: number = Math.floor(leave1 / (3600 * 1000));
  let leave2: number = leave1 % (3600 * 1000);
  let minutes: number = Math.floor(leave2 / (60 * 1000));
  let leave3: number = leave2 % (60 * 1000);
  let seconds: number = Math.round(leave3 / 1000);
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
};

export default {
  getHoroscope,
  dateDifference,
};
