interface optionsInter {
  val: any,
  length: number
}

interface appointLen {
  start: number,
  end: number,
  val: any
}

type interCheck = (val: any) => boolean

type superInterCheck = (options: optionsInter) => boolean

type appointLenInterCheck = (options: appointLen) => boolean

export default class reCheck {
  /*---------------------------------------------其他校验-------------------------------------------------------*/

  /* 检测电话号码是否正确 */
  public checkPhone: interCheck = (val) => /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val)

  /* 检测是否是邮箱 */
  public checkEmail: interCheck = (val) => /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(val)

  /* 检测url是否合法 */
  public checkUrl: interCheck = (val) => /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(val)

  /* 国内座机号码 */
  public checkDomesticTelephone: interCheck = (val) => /\d{3}-\d{8}|\d{4}-\d{7}/.test(val)

  /* 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间 */
  public checkNotSpecial: appointLenInterCheck = (options) => new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{'+ options.start +','+ options.end + '}$').test(options.val)

  /* HTML标记 */
  public checkHtml: interCheck = (val) => new RegExp('<(\\S*?)[^>]*>.*?</\\1>|<.*? />').test(val)

  /* 腾讯QQ号 */
  public checkQQ: interCheck = (val) => /[1-9][0-9]{4,}/.test(val)

  /*  中国邮政编码 */
  public checkPostOffice: interCheck = (val) => /[1-9]\d{5}(?!\d)/.test(val)

  /* IP地址 */
  // public checkIP: interCheck = (val) => /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(val)

  /*----------------------------------------字符串校验-----------------------------------------------------------*/

  /* 日期格式 */
  public checkDateFormat: interCheck = (val) => /^\d{4}-\d{1,2}-\d{1,2}/.test(val)

  /* 小写字母*/
  public checkLowerCase: interCheck = (val) => /^[a-z]+$/.test(val)

  /* 大写字母*/
  public checkUpperCase: interCheck = (val) => /^[A-Z]+$/.test(val)

  /* 大小写字母*/
  public checkAlphabets: interCheck = (val) => /^[A-Za-z]+$/.test(val)

  /* 检验身份证 */
  public checkCID: interCheck = (val) => /^\d{15}|\d{18}$/.test(val)

  /* 以字母开头，长度在6~18之间，只能包含字母、数字和下划线 */
  public checkPasswordSpecification: appointLenInterCheck = (options) => new RegExp('^[a-zA-Z]\\w{'+ options.start +','+ options.end +'}$').test(options.val)

  /* 汉字 */
  public checkDChineseCharacterDetection: interCheck = (val) => /^[\u4e00-\u9fa5]*$/.test(val)

  /* 由数字、26个英文字母或者下划线组成的字符串 */
  public checkNumberUnderscoreletter: interCheck = (val) => /^\w+$/.test(val)

  /* 中文、英文、数字包括下划线 */
  public checkChineseNumberEnglishUnderline: interCheck = (val) => /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(val)

  /* 中文、英文、数字但不包括下划线等符号 */
  public checkSpecialCharacters: interCheck = (val) => /^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(val)

  /*---------------------------------------------数字校验-------------------------------------------------------*/

  /* 验证字符串是否是数字*/
  public checkStrComposedOfNumber: interCheck = (val) => /^[0-9]+.?[0-9]*$/.test(val)

  /* 检测N位数 */
  public checkNumberLength: superInterCheck = (options) => new RegExp("^\\d{" + options.length + "}$").test(options.val)

  /* 检测m-n位的数字 */
  public checkAppointLen: appointLenInterCheck = (options) => new RegExp("^\\d{" + options.start + ',' +  options.end + "}$").test(options.val)

  /* 零和非零开头的数字 */
  public checkZeroAndNonZero: interCheck = (val) => /^(0|[1-9][0-9]*)$/.test(val)

  /* 非零开头的最多带两位小数的数字 */
  public checkTwoDecimalplaces: interCheck = (val) => /^([1-9][0-9]*)+(.[0-9]{1,2})?$/.test(val)

  /* 带1-2位小数的正数或负数 */
  public checkDecimalplaces: interCheck = (val) => /^(\-)?\d+(\.\d{1,2})?$/.test(val)

  /* 正数、负数、和小数 */
  public checkPND: interCheck = (val) => /^(\-|\+)?\d+(\.\d+)?$/.test(val)

  /* 有两位小数的正实数 */
  public checkPositiveTDP: interCheck = (val) => /^[0-9]+(.[0-9]{2})?$/.test(val)

  /* 有1~3位小数的正实数 */
  public checkOandTPositive: interCheck = (val) => /^[0-9]+(.[0-9]{1,3})?$/.test(val)

  /* 非零的正整数 */
  public checkNonzeroPositive: interCheck = (val) => /^[1-9]\d*/.test(val)

  /* 非零的负整数 */
  public checkNonzeroNegative: interCheck = (val) => /^-[1-9]\d*$/.test(val)

  /* 非负整数 */
  public checkNotNegative: interCheck = (val) => /^\d+$/.test(val)

  /* 非正整数 */
  public checkNotPositive: interCheck = (val) => /^-[1-9]\d*|0$/.test(val)

  /* 非负浮点数 */
  public checkNotNegativeFloat: interCheck = (val) => /^\d+(\.\d+)?$/.test(val)

  /* 非正浮点数 */
  public checkNotPositiveFloat: interCheck = (val) => /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/.test(val)

  /* 正浮点数 */
  public checkPositiveFloat: interCheck = (val) => /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/.test(val)

  /* 负浮点数 */
  public checkNegativeFloat: interCheck = (val) => /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(val)

  /* 浮点数 */
  public checkFloat: interCheck = (val) => /^(-?\d+)(\.\d+)?$/.test(val)

}
