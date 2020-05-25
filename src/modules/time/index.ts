import {
    TimeDiffer,
    TimeFunc,
    TimeOptionsFunc,
    Format,
    dayInter,
    numberInter,
    stringInter,
    cycleInter,
    getDateInter
} from './interface'
import {parseNumber, _timeFormat, timeSpanPositioning} from '../../tools/timeTools'

export default class Time {
    /*
    * 计算星座
    * @params date : number 时间戳
    * */
    public getHoroscope: TimeFunc = (date) => {
        let constellation: string[] = ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯']
        let timeTransformation: Date = new Date(date);
        let month = timeTransformation.getMonth() + 1;
        let day = timeTransformation.getDate();
        // @ts-ignore
        let startMonth: number = month - (day - 14 < '865778999988'.charAt(month));
        return constellation[startMonth] + '座';
    }

    /*
    * 时间差
    * @params options obj 配置对象
    * */
    public sumAge: TimeOptionsFunc = (options) => {
        const {isTimestamp, startTime, type, endTime} = options;
        let dateBegin: any = startTime;
        let dateEnd: any = endTime || new Date().getTime();
        if (!isTimestamp) {
            if (typeof startTime !== 'string' || typeof endTime !== 'string') {
                throw new Error(`isTimestamp and configuration type are incorrect`)
            }
            dateBegin = new Date(startTime.replace(/-/g, "/")).getTime();
            if (endTime) {
                dateEnd = isTimestamp ? endTime : new Date(endTime.replace(/-/g, "/")).getTime()
            }
        } else {
            if (typeof startTime !== 'number' || typeof endTime !== 'number') {
                throw new Error(`isTimestamp and configuration type are incorrect`)
            }
        }
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
                return dayDiff + "天";
            case 'hours':
                return hours + "小时";
            case 'minutes':
                return minutes + '分';
            case 'seconds':
                return seconds + '秒';
            case 'HoursMinutes' :
                return hours + "小时 " + minutes + '分';
            case 'HoursMinutesSeconds' :
                return hours + "小时 " + minutes + '分 ' + seconds + '秒 ';
            case 'timeHours' :
                return dayDiff + "天 " + hours + "小时";
            case 'timeHoursMinutes' :
                return dayDiff + "天 " + hours + "小时 " + minutes + '分';
            default:
                return dayDiff + "天 " + hours + "小时 " + minutes + '分 ' + seconds + '秒 ';
        }
    }

    // 计算相差X秒内的信息不会显示时间
    public getChatTime(options: TimeDiffer<number>) {
        const {oTime, nTime, differ} = options
        // @ts-ignore
        oTime = _timeFormat<number>(oTime);
        // @ts-ignore
        nTime = _timeFormat<number>(nTime);
        if ((nTime - oTime / 1000) > differ) {
            return this.getTime(nTime);
        }
    }

    // 获取当前时间并格式化
    public getTime: TimeFunc = (data) => {
        data = _timeFormat<number>(data);
        let now = (new Date()).getTime();
        let cha = (now - data) / 1000;
        if (cha < 43200) {
            // 当天
            return this.dateFormat({time: data, formatStr: "{A} {t}:{ii}"});
        } else if (cha < 518400) {
            // 隔天 显示日期+时间
            return this.dateFormat({time: data, formatStr: "{Mon}月{DD}日 {A} {t}:{ii}"});
        } else {
            // 隔年 显示完整日期+时间
            return this.dateFormat({time: data, formatStr: "{Y}-{MM}-{DD} {A} {t}:{ii}"});
        }
    }

    /*
    * 格式化时间
    * @params: options 格式化配置对象
    * 可以自定义格式： 如：{Y}-{MM}-{DD} {A} {t}:{ii}
    * {
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
    * */
    public dateFormat: Format = (options) => {
        const {time, formatStr} = options
        const date = new Date(time)
        let dateObj = {},
            rStr = /\{([^}]+)\}/,
            mons: string[] = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        // @ts-ignore
        dateObj["Y"] = date.getFullYear();
        // @ts-ignore
        dateObj["M"] = date.getMonth() + 1;
        // @ts-ignore
        dateObj["MM"] = parseNumber(dateObj["M"]);
        // @ts-ignore
        dateObj["Mon"] = mons[dateObj['M'] - 1];
        // @ts-ignore
        dateObj["D"] = date.getDate();
        // @ts-ignore
        dateObj["DD"] = parseNumber(dateObj["D"]);
        // @ts-ignore
        dateObj["h"] = date.getHours();
        // @ts-ignore
        dateObj["hh"] = parseNumber(dateObj["h"]);
        // @ts-ignore
        dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
        // @ts-ignore
        dateObj["tt"] = parseNumber(dateObj["t"]);
        // @ts-ignore
        dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
        // @ts-ignore
        dateObj["i"] = date.getMinutes();
        // @ts-ignore
        dateObj["ii"] = parseNumber(dateObj["i"]);
        // @ts-ignore
        dateObj["s"] = date.getSeconds();
        // @ts-ignore
        dateObj["ss"] = parseNumber(dateObj["s"]);
        while (rStr.test(formatStr)) {
            // @ts-ignore
            formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
        }
        return formatStr;
    }

    // 获取本月的最后一天
    public getLastDayOfMonth: numberInter = () => {
        const date: Date = new Date()
        const month = date.getMonth()
        date.setMonth(month + 1)
        date.setDate(0)
        return date.getDate() // 返回最后一天
    }

    // 获取这个季度的第一天
    public getFirstDayOfSeason: dayInter = (formatStr = '{Y}-{MM}-{DD}') => {
        const date: Date = new Date()
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
        date.setDate(1);
        return this.dateFormat({
            time: date.getTime(),
            formatStr
        })
    }

    // 获取当天是周几
    public getWeek: stringInter = () => {
        const weekStr = '日一二三四五六'
        return weekStr.charAt(new Date().getDay());
    }

    // 获取今天是当年的第几天
    public getYearDay: numberInter = () => {
        // @ts-ignore
        return timeSpanPositioning(1)
    }

    // 获取今天是当年的第几周
    public getYearWeek: numberInter = () => {
        // @ts-ignore
        return timeSpanPositioning(7)
    }

    // 获取今年还剩下多少时间
    public lastDay: numberInter = () => {
        const data = new Date()
        const nextYear = (data.getFullYear() + 1).toString()
        // @ts-ignore
        const lastDay: Date = new Date(new Date(nextYear) - 1).getTime() // 获取本年的最后一毫秒：
        // @ts-ignore
        const diff = lastDay - data  // 毫秒数
        return Math.floor(diff / (1000 * 60 * 60 * 24))
    }

    //获取N天后的日期
    public getDate: getDateInter = (time, count) => {
        time.setDate(time.getDate() + count) //获取N天后的日期
        const date = new Date(+time + 8 * 3600 * 1000)
        return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '-');
    }

    /*
    *  计算当周开始和结束时间
    * @params formatStr string 时间格式
    * */
    public getWeekCycle: cycleInter = (formatStr = '{Y}-{MM}-{DD}') => {
        const data: Date = new Date()
        let weekday = data.getDay();
        weekday = weekday === 0 ? 7 : weekday
        // @ts-ignore
        const firstDay = this.dateFormat({
            time: new Date(this.getDate(data, -weekday).replace(/-/g, "/")).getTime(),
            formatStr
        })
        // @ts-ignore
        const lastDay = this.dateFormat({
            time: new Date(this.getDate(data, 7 - 1).replace(/-/g, "/")).getTime(),
            formatStr
        })
        return {
            firstDay,
            lastDay
        }
    }
}







