# js-hodgepodge 一个全面的JS工具库
**使用npm命令安装**

`npm i js-hodgepodge -S`

**全局引入**
`import * as hodgepodge from 'js-hodgepodge'`

具体调用
```
console.log(hodgepodge.time) // 查看time模块上所有API
console.log(hodgepodge.tools) // 查看tools上所有API
console.log(hodgepodge.cache) // 查看cache上所有API
console.log(hodgepodge.check) // 查看check上所有API
```
目前只上线了四大板块，后续会维护更新

**按需引入**

**Time模块**

这是一个包含大部分开发需要用到的时间模块，包括时间格式，引入如下：

`import { time } from 'js-hodgepodge'`

**API介绍**

**getHoroscope()**

计算星座，传入时间戳返回对应的星座

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
| date  | true  | Number  | 时间戳 |


**示例:**
```
let textData: number = new Date().getTime()
console.log(time.getHoroscope(textData)) // 双子座
```
**timeDifference()**

计算时间差,传入时间配置对象

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  isTimestamp |  true | boolean | 是否传时间戳(true/false)  |
|  startTime  |  true | number / string  | 时间戳或者是时间格式  |
|  type | false |  string | 返回类型（day、hours、minutes、seconds、HoursMinutes、HoursMinutesSeconds、timeHours、timeHoursMinutes）  |
| endTime  | false | number / string | 不传的话默认当前时间 |

**示例:**
```
console.log('时间差' + time.timeDifference({
isTimestamp: false,
type: 'day',
startTime: '2020/6/25 13:26:40',
endTime: '2020/5/25 13:26:40'
})) // 时间差31天
```
**getChatTime()**

计算相差X秒内的信息会不会显示时间，用于显示聊天消息时间居多，传入时间配置对象

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
| oTime  | true  | number | 起始时间，传时间戳 |
| nTime | true  | number | 结束时间，时间戳 |
| differ | true  | number | 开始，结束时间相差间隔 |

**示例:**
```
console.log(time.getChatTime({
oTime: 1587360400,
nTime: 1589963293,
differ: 300
})) // 2020-05-20 下午 4:28
```
**getTime()**

传入一个时间，与当前时间进行比较，比如当天下午6点40分，则显示下午6:40，用于显示显示发布时间、聊天时间居多，传入时间戳

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
| data  | true | number  | 传入时间戳 |
| isDisplay  | false | boolean  | 是否显示完整时间，不传默认为false |

**示例:**
```
console.log(time.getTime(1587360400)) // 2020-04-20 下午 1:26
console.log(time.getTime(new Date().getTime())) // 下午 6:40
console.log(time.getTime(new Date().getTime()， true)) // 2020-06-03 上午 10:41
```
**dateFormat()**

格式化时间,可自定义格式，传入一个配置对象

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  time | true  | number |  需要转换格式的时间戳 |
| formatStr  |  false | string  | 自定义时间格式，不传则显示默认格式：{Y}-{MM}-{DD} {A} {t}:{ii}  |

**转换格式表**

| param  | describe  |
| ------------ | ------------ |
| Y  | 年  |
| M  | 不补0的月 |
| MM  | 补0的月  |
| Mon  | 大写月  |
| D  | 不补0的日  |
|  DD |  补0的日 |
| h  | 不补0的小时  |
| hh  |  补0的小时 |
|  A | 显示上午下午  |
|  i | 补0的分钟  |
| ii  | 不补0的分钟  |
| s  | 补0的秒钟  |
| ss  | 不补0的秒钟  |

**示例:**
可以自定义格式： 如 {t}:{ii}
```
console.log('当前时间格式化' + time.dateFormat({
time: new Date().getTime(),
formatStr: '{t}:{ii}'
})) // 当前时间格式化9:45
// 不传
console.log('当前时间格式化' + time.dateFormat({
time: new Date().getTime()
})) // 当前时间格式化2020-06-03 上午 9:46
```

**getLastDayOfMonth()**

获取本月的最后一天

**示例:**
可以自定义格式： 如 {t}:{ii}
```
console.log('month' + time.getLastDayOfMonth()) // month30
```

**getFirstDayOfSeason()**

获取这个季度的第一天

**示例:**

`console.log('季度第一天' + time.getFirstDayOfSeason()) // 季度第一天2020-04-01`

**getWeek()**

获取当天是周几

**示例:**

`console.log('周' + time.getWeek()) // 周三`

**getYearDay()**

获取今天是当年的第几天

**示例:**

`console.log('今天是今年的第' + time.getYearDay() + '天') // 今天是今年的第155天`

**getYearWeek()**

获取今天是当年的第几周

**示例:**

`console.log('今天是今年的第' + time.getYearWeek() + '周') // 今天是今年的第23周`

**lastDay()**

获取今年还剩下多少时间

**示例:**

`console.log('今年还剩下'+ time.lastDay() +'天' ) // 今年还剩下211天`

**getDate()**

获取N天后的日期

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  time | true  | number / Date |  起始时间,可以为时间戳，可以为new出来的时间格式 |
| count  |  true | number  | 几天后的区间，可为负数  |

**示例:**

```
console.log('获取N天后的日期' + time.getDate(new Date(), 7)) // 获取N天后的日期2020-06-10 10:16:51
console.log('获取N天后的日期' + time.getDate(new Date().getTime(), 7)) // 获取N天后的日期2020-06-10 10:16:51
```

**getWeekCycle()**

计算当周开始和结束时间

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  formatStr | false  | string |  不传默认格式{Y}-{MM}-{DD} |

**示例:**

```
console.log(time.getWeekCycle('{Y}-{MM}-{DD} {A} {t}:{ii}:{ss}')) // {firstDay: "2020-05-31 上午 10:19:35", lastDay: "2020-06-06 上午 10:19:35"}
// 不传
console.log(time.getWeekCycle()) // {firstDay: "2020-05-31", lastDay: "2020-06-06"}
```
**isExist()**

判断某段时间是否存在

**注：只能统一同一种类型，如number类型所有参数必须是number类型，结束时间必须比其实时间晚**

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  beginTime | true  | number / string |  起始时间,可以为时间戳，时间字符格式，可传可不传，不传默认当天 |
| lastTime  |  true | number / string | 结束时间  |
| time  |  true | number / string | 需要判断的时间点 |

**示例:**

```
// string类型
console.log('是否是'+ time.getTime(new Date().getTime(), true) +'区间' + time.isExist({
lastTime: '2020-07-01 15:36:47',
time: '2020-06-01 15:36:47'
})) // 是否是2020-06-03 上午 10:38区间false

// number类型
console.log('是否是'+ new Date().getDay +'区间' + time.isExist({
lastTime: 1587360400,
time: 1589963293
})) // 是否是2020-06-03 上午 10:56区间true
```
