# js-hodgepodge 一个全面的JS工具库

# 安装

**使用npm命令安装**

`npm i js-hodgepodge -S`

**全局引入**
`import * as hodgepodge from 'js-hodgepodge'`

**按需引入**

`import {...方法名} from 'js-hodgepodge'`

# 常用的工具函数模块

这是一个开发常用的工具函数库

### API介绍

### throttle()

一个节流函数

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  func | true  | function | 执行后的回调 |
|  awai | false  | number |  间距时间ms，不传默认200 |

**示例:**

```
/* 向下滚动时，每隔350ms打印出 count count + 1  参数a 2  参数b 3 */
let count = 0
window.addEventListener('scroll', throttle((a = 2, b = 3) => {
console.log('count' + count, ' 参数a '+ 2 , ' 参数b '+ 3)
count += 1
}, 350))
```

### debounce()

一个防抖函数

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  func | true  | function | 执行后的回调 |
|  awai | false  | number |  间距时间ms，不传默认200 |

**示例:**

```
/* 无间断点击时，会在350MS执行后执行最后一次点击 */
document.querySelector('.btn').addEventListener('click', debounce(() => {
console.log('调用API')
}, 350))

```

### clipboard()

点击复制内容

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  text | false  | any | 文本内容 |
|  target | false  | Element | 复制目标元素（复制他里的innerText） |

**示例:**

```
clipboard('啦啦啦')

function elementP() {
    const el = document.createElement('p')
    el.innerText = '啦啦啦'
    return p
}

document.querySelector('body').appendChild(elementP())

clipboard(null, elementP())

```

### decopy()

从根源上的深拷贝

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  data | true  | any | 拷贝的内容 |

**示例:**

```
decopy({})
```

### typeOf()

获取类型

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  target | true  | any | 查询的目标 |

**示例:**

```
typeOf({}) // object
```

### getUrlKey()

获取当前路由参数上的地址

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  name | true  | string | 地址上的参数值 |

**示例:**

```
/* 假设当前网址为 'http://127.0.0.1:8080/public/myBlog/bolgInfo?code=1321321321' */

create() {
const code = getUrlKey('code') // 1321321321
}
```

### isObjectLike()

断数据是不是Object类型的数据

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  val | true  | any | 目标参数 |

**示例:**

```
let obj = {}
console.log(isObjectLike(obj)) // true
let obj = ''
console.log(isObjectLike(obj)) // false
```
### cached()

记忆函数：缓存函数的运算结果

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  fn | true  | function | 回调函数 |

**示例:**

```
let count = 5
document.querySelector('.btn').addEventListener('click', function () {
cached(res => {
count += 5
console.log('res' + res) // 旧值 5
console.log('count' + count) // 新值 10
})(count)
})
```

### capitalize()

把字符串首位转为大写

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  val | true  | string | 目标参数 |

**示例:**

```
console.log(capitalize('abcd')) // Abcd
```

# 缓存模块

分为cooick操作以及localStorage操作

### API介绍

### setLocalStorage()

存入storage缓存，让storage有时间概念

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  key | true  | number |  键值 |
|  value | true  | any |  值 |
|  distance | true  | number |  时间间距，存多久 |

```
setLocalStorage('down', 60, 24*60*60*1000)
```

### getLocalStorage()

取出缓存

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  key | true  | number |  键值 |

```
getLocalStorage('down')
```

### removeLocalStorage()

删除storage缓存

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  key | true  | number |  键值 |

```
removeLocalStorage('down')
```

### setCooick()

设置cooick 

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  key | true  | number |  键值 |
|  val | true  | any |  值 |
|  attributes | false  | any | 其他属性，如：加域名范围 |

```
setCooick('down')
```

### getCooick()

获取cooick

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  key | true  | number |  键值 |

```
getCooick('down')
```

### removeCooick()

删除cooick

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  key | true  | number |  键值 |
|  attributes | false  | any | 其他属性，如：加域名范围 |

```
removeCooick('down')
```

# Date模块

这是一个包含大部分开发需要用到的时间模块，包括时间格式，引入如下：


### API介绍

### getHoroscope()

计算星座，传入时间戳返回对应的星座

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
| date  | true  | Number  | 时间戳 |


**示例:**
```
let textData: number = new Date().getTime()
console.log(getHoroscope(textData)) // 双子座
```
### timeDifference()

计算时间差,传入时间配置对象

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  isTimestamp |  true | boolean | 是否传时间戳(true/false)  |
|  startTime  |  true | number / string  | 时间戳或者是时间格式  |
|  type | false |  string | 返回类型（day、hours、minutes、seconds、HoursMinutes、HoursMinutesSeconds、timeHours、timeHoursMinutes）  |
| endTime  | false | number / string | 不传的话默认当前时间 |

**示例:**
```
console.log('时间差' + timeDifference({
isTimestamp: false,
type: 'day',
startTime: '2020/6/25 13:26:40',
endTime: '2020/5/25 13:26:40'
})) // 时间差31天
```
### getChatTime()

计算相差X秒内的信息会不会显示时间，用于显示聊天消息时间居多，传入时间配置对象

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
| oTime  | true  | number | 起始时间，传时间戳 |
| nTime | true  | number | 结束时间，时间戳 |
| differ | true  | number | 开始，结束时间相差间隔 |

**示例:**
```
console.log(getChatTime({
oTime: 1587360400,
nTime: 1589963293,
differ: 300
})) // 2020-05-20 下午 4:28
```
### getTime()

传入一个时间，与当前时间进行比较，比如当天下午6点40分，则显示下午6:40，用于显示显示发布时间、聊天时间居多，传入时间戳

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
| data  | true | number  | 传入时间戳 |
| isDisplay  | false | boolean  | 是否显示完整时间，不传默认为false |

**示例:**
```
console.log(getTime(1587360400)) // 2020-04-20 下午 1:26
console.log(getTime(new Date().getTime())) // 下午 6:40
console.log(getTime(new Date().getTime()， true)) // 2020-06-03 上午 10:41
```
### dateFormat()

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
console.log('当前时间格式化' + dateFormat({
time: new Date().getTime(),
formatStr: '{t}:{ii}'
})) // 当前时间格式化9:45
// 不传
console.log('当前时间格式化' + dateFormat({
time: new Date().getTime()
})) // 当前时间格式化2020-06-03 上午 9:46
```

### getLastDayOfMonth()

获取本月的最后一天

**示例:**
可以自定义格式： 如 {t}:{ii}
```
console.log('month' + getLastDayOfMonth()) // month30
```

### getFirstDayOfSeason()

获取这个季度的第一天

**示例:**

`console.log('季度第一天' + getFirstDayOfSeason()) // 季度第一天2020-04-01`

### getWeek()

获取当天是周几

**示例:**

`console.log('周' + getWeek()) // 周三`

### getYearDay()

获取今天是当年的第几天

**示例:**

`console.log('今天是今年的第' + getYearDay() + '天') // 今天是今年的第155天`

### getYearWeek()

获取今天是当年的第几周

**示例:**

`console.log('今天是今年的第' + getYearWeek() + '周') // 今天是今年的第23周`

### lastDay()

获取今年还剩下多少时间

**示例:**

`console.log('今年还剩下'+ lastDay() +'天' ) // 今年还剩下211天`

### getDate()

获取N天后的日期

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  time | true  | number / Date |  起始时间,可以为时间戳，可以为new出来的时间格式 |
| count  |  true | number  | 几天后的区间，可为负数  |

**示例:**

```
console.log('获取N天后的日期' + getDate(new Date(), 7)) // 获取N天后的日期2020-06-10 10:16:51
console.log('获取N天后的日期' + getDate(new Date().getTime(), 7)) // 获取N天后的日期2020-06-10 10:16:51
```

### getWeekCycle()

计算当周开始和结束时间

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  formatStr | false  | string |  不传默认格式{Y}-{MM}-{DD} |

**示例:**

```
console.log(getWeekCycle('{Y}-{MM}-{DD} {A} {t}:{ii}:{ss}')) // {firstDay: "2020-05-31 上午 10:19:35", lastDay: "2020-06-06 上午 10:19:35"}
// 不传
console.log(getWeekCycle()) // {firstDay: "2020-05-31", lastDay: "2020-06-06"}
```

### isExist()

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
console.log('是否是'+ getTime(new Date().getTime(), true) +'区间' + time.isExist({
lastTime: '2020-07-01 15:36:47',
time: '2020-06-01 15:36:47'
})) // 是否是2020-06-03 上午 10:38区间false

// number类型
console.log('是否是'+ new Date().getDay +'区间' + isExist({
lastTime: 1587360400,
time: 1589963293
})) // 是否是2020-06-03 上午 10:56区间true
```

### getExplorerInfo()

获取浏览器信息

**示例:**

```
console.log(getExplorerInfo()) // {type: "Chrome", version: 78}
```


### getRawType()

获取数据类型

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  val | true  | string | 目标参数 |

**示例:**

```
console.log(getRawType(123)) // Number
```

### isStatic()

获取数据类型

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  val | true  | string | 目标参数 |

**示例:**

```
console.log(isStatic(123)) // true
```

### unique()

获取数据类型

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  arr | true  | Array | 目标参数 |

**示例:**

```
const a = [1, 1, 2]
console.log(unique(a)) // [1, 2]
```

# 正则校验模块

这是一个包含大部分常用的正则表达式库

### API介绍

### interCheck()

检测电话号码是否正确

**示例**

```
console.log(checkPhone(13428052268)) // true
console.log(checkPhone(11111111111)) // false
```

### checkEmail()

**示例**

```
console.log(checkEmail('272781702@qq.com')) // true
console.log(checkEmail(1111)) // false
```

### checkUrl()

检测url是否合法

**示例**

```
console.log(checkUrl('http://www.baodu.com')) // true
console.log(checkUrl('http:www.baodu.com')) // false
```

### checkDomesticTelephone()

国内座机号码

**示例**

```
console.log(checkDomesticTelephone('0752-89915876')) // true
console.log(checkDomesticTelephone('111111')) // false
```

### checkNotSpecial()

必须包含大小写字母和数字的组合，不能使用特殊字符，长度在start-end之间

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  start | true  | number |  起始长度 |
|  end | true  | number |  结束长度 |
|  val | true  | any |  需要判断的参数 |

**示例**

```
console.log(checkNotSpecial({
start: 8,
end: 10,
val: 'Ab12345678'
})) // true
console.log(checkNotSpecial({
start: 8,
end: 10,
val: 'A12345'
})) // false
```

### checkPasswordSpecification()

以字母开头，长度在start~end之间，只能包含字母、数字和下划线

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  start | true  | number |  起始长度 |
|  end | true  | number |  结束长度 |
|  val | true  | any |  需要判断的参数 |

**示例**

```
console.log(checkPasswordSpecification({
start: 8,
end: 10,
val: 'Ab12345678'
})) // true
console.log(checkPasswordSpecification({
start: 8,
end: 10,
val: '12345A'
})) // false
```

### checkNumberUnderscoreletter()

由数字、26个英文字母或者下划线组成的字符串

**示例**

```
console.log(checkNumberUnderscoreletter('123A')) // true
console.log(checkNumberUnderscoreletter('12~~')) // false
```

### checkChineseNumberEnglishUnderline()

中文、英文、数字包括下划线

**示例**

```
console.log(checkChineseNumberEnglishUnderline('我是_SHAN')) // true
console.log(checkChineseNumberEnglishUnderline('我是~~~')) // false
```

### checkSpecialCharacters()

中文、英文、数字但不包括下划线等符号

**示例**

```
console.log(checkSpecialCharacters('我是Shan')) // true
console.log(checkSpecialCharacters('我是_SHAN')) // false
```

### checkHtml()

判断是否是html标签

**示例**

```
console.log(checkHtml('<body></body>')) // true
console.log(checkHtml('body />')) // false
```

### checkDChineseCharacterDetection()

判断是否是汉字

**示例**

```
console.log(checkDChineseCharacterDetection('我是')) // true
console.log(checkDChineseCharacterDetection('Shan')) // false
```

### checkQQ()

判断是否是腾讯QQ号

**示例**

```
console.log(checkQQ(100000)) // true
console.log(checkQQ(10000000000000000000000)) // false
```

### checkPostOffice()

判断是否是中国邮政编码

**示例**

```
console.log(checkPostOffice(516300)) // true
console.log(checkPostOffice(10000000000000000000000)) // false
```

### checkDateFormat()

判断是否是日期格式

**示例**

```
console.log(checkDateFormat('2020-6-03')) // true
console.log(checkDateFormat('http:www.baodu.com')) // false
```

### checkLowerCase()

判断是否是小写字母

**示例**

```
console.log(checkLowerCase('abc')) // true
console.log(checkLowerCase('ABC')) // false
```

### checkUpperCase()

判断是否是小写字母

**示例**

```
console.log(checkUpperCase('ABC')) // true
console.log(checkUpperCase('abc')) //false
```

### checkAlphabets()

判断是否是字母

**示例**

```
console.log(checkAlphabets('ABCa')) // true
console.log(checkAlphabets('abcA121')) //false
```

### checkCID()

判断是否是字母

**示例**

```
console.log(checkCID(110101199003077475)) // true
console.log(checkCID(1101111111111111111111)) // false
```

### checkStrComposedOfNumber()

验证字符串是否是数字

**示例**

```
console.log(checkStrComposedOfNumber('11111')) // true
console.log(checkStrComposedOfNumber('abc')) // false
```

### checkNumberLength()

验证字符串是否是数字

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  length | true  | number |  目标长度 |
|  val | true  | any |  需要判断的参数 |

**示例**

```
console.log(checkNumberLength({
length: 6,
val: '123456'
})) // true
console.log(checkNumberLength({
length: 5,
val: '12354666'
})) // false
```

### checkAppointLen()

检测m-n位的数字

| param  |  required | type  | describe  |
| ------------ | ------------ | ------------ | ------------ |
|  start | true  | number |  目标长度起始长度 |
|  end | true  | number |  目标长度结束长度 |
|  val | true  | any |  需要判断的参数 |

**示例**

```
console.log(checkAppointLen({
start: 6,
end: 8,
val: '123456'
})) // true
console.log(checkAppointLen({start: 6,
end: 8,
val: '1235466634214'
})) // false
```

### checkZeroAndNonZero()

检测非零开头的数字

**示例**

```
console.log(checkZeroAndNonZero('123245')) // true
console.log(checkZeroAndNonZero('012345')) // false
```

### checkTwoDecimalplaces()

非零开头的最多带两位小数的数字

**示例**

```
console.log(checkTwoDecimalplaces(123245.00)) // true
console.log(checkTwoDecimalplaces('012345')) // false
```

### checkDecimalplaces()

带1-2位小数的正数或负数

**示例**

```
console.log(checkDecimalplaces(123245.12)) // true
console.log(checkDecimalplaces(12323.123)) // false
```

### checkPND()

判断正数、负数、和小数

**示例**

```
console.log(checkPND(123245)) // true
console.log(checkPND(';asda')) // false
```

### checkPositiveTDP()

有两位小数的正实数

**示例**

```
console.log(checkPositiveTDP(123245.12)) // true
console.log(checkPositiveTDP(-123.12)) // false
```
### checkOandTPositive()

有1~3位小数的正实数

**示例**

```
console.log(checkOandTPositive(123245.12)) // true
console.log(checkOandTPositive(-123.12)) // false
```
### checkNonzeroPositive()

非零的正整数

**示例**

```
console.log(checkNonzeroPositive(123245)) // true
console.log(checkNonzeroPositive(-123.12)) // false
```
### checkNotPositive()

非正整数

### checkNotPositiveFloat()

非正浮点数

### checkPositiveFloat()

正浮点数

### checkNonzeroPositive()

非零的负整数

**示例**

```
console.log(checkNonzeroNegative(-123245)) // true
console.log(checkNonzeroNegative(123)) // false
```
### checkNotNegative()

非负整数

### checkNotNegativeFloat()

非负浮点数

### checkNegativeFloat()

负浮点数

### checkFloat()

负浮点数
