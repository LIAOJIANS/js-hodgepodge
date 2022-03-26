/**
 * 注入cooick到浏览器
 * @param key 值的key
 * @param val 设置的值
 * @param attributes 扩展属性，如设置有效期{ expires: Date.now() + 30 * 24 * 60 * 60 * 1000 } --- 有效期一个月
 * @returns
 */
export declare function setCooick(key: string, val: any, attributes?: {
    path?: string;
    expires?: any;
    [key: string]: any;
}): void | string;
/**
 *
 * @param key 需要获取cooick的key
 * @returns 获取的val值
 */
export declare function getCooick(key: string): any;
/**
 *
 * @param key 需要删除cooick的key
 * @param attributes 扩展属性
 */
export declare function removeCooick(key: string, attributes?: {
    path?: string;
    expires?: any;
    [key: string]: any;
}): void;
