import { TimeFormal, TimeDiffer, FormatTime, TimeFunc, TimeOptionsFunc, Format } from './interface'

export default class Time {
    /*
    * 计算星座
    * @params date : number 时间戳
    * */
    public getHoroscope:TimeFunc = (date) => {
        let constellation: string[] = ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯']
        let timeTransformation: Date = new Date(date);
        let month = timeTransformation.getMonth() + 1;
        let day = timeTransformation.getDate();
        // @ts-ignore
        let startMonth: number = month - (day - 14 < '865778999988'.charAt(month));
        return constellation[startMonth] + '座';
    }

    /*
    * 当前时间差
    * @params date : string 时间
    * */
    public sumAge: TimeOptionsFunc = (options) => {
        const {isTimestamp, time, type} = options;
        let dateBegin: any = time;
        if (!isTimestamp) {
            dateBegin = new Date(time.replace(/-/g, "/")).getTime();
        }
        let dateEnd: Date = new Date();
        let dateDiff: number = dateEnd.getTime() - dateBegin;
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
        const { oTime, nTime, differ } = options
        // @ts-ignore
        oTime = this._timeFormat<number>(oTime);
        // @ts-ignore
        nTime = this._timeFormat<number>(nTime);
        if ((nTime - oTime / 1000) > differ) {
            return this.getTime(nTime);
        }
    }
    // 获取当前时间并格式化
    public getTime: TimeFunc = (data) => {
        data = this._timeFormat<number>(data);
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

    // 判断时间戳长度
    _timeFormat<T>(data: T): number | T{
        // @ts-ignore
        return data.toString().length < 13 ? data * 1000 : data
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
        const { time, formatStr } = options
        const date = new Date(time)
        let dateObj = {},
            rStr = /\{([^}]+)\}/,
            mons: string[] = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        // @ts-ignore
        dateObj["Y"] = date.getFullYear();
        // @ts-ignore
        dateObj["M"] = date.getMonth() + 1;
        // @ts-ignore
        dateObj["MM"] = this.parseNumber(dateObj["M"]);
        // @ts-ignore
        dateObj["Mon"] = mons[dateObj['M'] - 1];
        // @ts-ignore
        dateObj["D"] = date.getDate();
        // @ts-ignore
        dateObj["DD"] = this.parseNumber(dateObj["D"]);
        // @ts-ignore
        dateObj["h"] = date.getHours();
        // @ts-ignore
        dateObj["hh"] = this.parseNumber(dateObj["h"]);
        // @ts-ignore
        dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
        // @ts-ignore
        dateObj["tt"] = this.parseNumber(dateObj["t"]);
        // @ts-ignore
        dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
        // @ts-ignore
        dateObj["i"] = date.getMinutes();
        // @ts-ignore
        dateObj["ii"] = this.parseNumber(dateObj["i"]);
        // @ts-ignore
        dateObj["s"] = date.getSeconds();
        // @ts-ignore
        dateObj["ss"] = this.parseNumber(dateObj["s"]);
        while (rStr.test(formatStr)) {
            // @ts-ignore
            formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
        }
        return formatStr;
    }
    // 补0
    parseNumber(num: number): any {
        return num < 10 ? "0" + num : num;
    }
}







