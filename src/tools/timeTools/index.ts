
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

export  {
    parseNumber,
    _timeFormat
}
