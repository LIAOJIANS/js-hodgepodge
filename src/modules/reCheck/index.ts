


type interCheck = (val: any) => boolean

export default class reCheck {
    public checkPhone: interCheck = (val) => {
        return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val)
    }

    /* 检测是否是游戏 */
    public checkEmail: interCheck = (val) => {
        return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(val)
    }

    /* 检测url是否合法 */
    public checkUrl: interCheck = (val) => {
        return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(val)
    }

    /* 小写字母*/
    public checkLowerCase: interCheck = (val) => {
        return /^[a-z]+$/.test(val)
    }

    /* 大写字母*/
    public checkUpperCase: interCheck = (val) => {
        return /^[A-Z]+$/.test(val)
    }

    /* 大小写字母*/
    public checkAlphabets: interCheck = (val) => {
        return /^[A-Za-z]+$/.test(val)
    }

    /* 验证字符串是否是数字*/
    public checkStrComposedOfNumber: interCheck = (val) => {
        return /^[0-9]+.?[0-9]*$/.test(val)
    }

    /* 检验身份证 */
    public checkCID: interCheck = (val) => {
        return /^\d{15}|\d{18}$/.test(val)
    }

    /* 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线) */
    public checkPasswordSpecification: interCheck = (val) => {
        return /^[a-zA-Z]\w{5,17}$/.test(val)
    }

    /* 日期格式 */
    public checkDateFormat: interCheck = (val) => {
        return /^\d{4}-\d{1,2}-\d{1,2}/.test(val)
    }

    /* 汉字 */
    public checkDChineseCharacterDetection: interCheck = (val) => {
        return /^[\u4e00-\u9fa5]*$/.test(val)
    }

}
