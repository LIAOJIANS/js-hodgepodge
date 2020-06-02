# js-hodgepodge 一个全面的JS工具库
        **使用npm命令安装**

        `npm i js-hodgepodge -S`

        目前只上线了四大板块，后续会维护更新
        1. Time模块
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

        **示例:**
        ```
        console.log(time.getTime(1587360400)) // 2020-04-20 下午 1:26
        console.log(time.getTime(new Date().getTime())) // 下午 6:40
        ```
        **dateFormat()**

        格式化时间,可自定义格式

        | param  |  required | type  | describe  |
        | ------------ | ------------ | ------------ | ------------ |
        |  time | true  | number |  需要转换格式的时间戳 |
        | formatStr  |  true | string  | 自定义时间格式  |

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
        |   | 显示上午下午  |
        |   |   |
        |   |   |
        |   |   |
