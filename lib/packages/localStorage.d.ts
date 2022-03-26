/**
  * 存入storage缓存
  * @param key number | string 键值
  * @param value any 值
  * @param distance number 缓存有效期
  *
  * */
export declare function setLocalStorage<T extends keyof {
    value: any;
    distance?: number | string;
    key: string;
}>(distance: T, value: T, key: T): void;
/**
* 取出storage缓存
* @param key number | string 键值
* */
export declare function getLocalStorage<T>(key: string): T;
/**
  * 删除storage缓存
  * @param key number | string 键值
  * */
export declare function removeLocalStorage(key: string): void;
