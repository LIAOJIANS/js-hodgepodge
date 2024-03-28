import { throttle, debounce, delay, getUrlKey, getRawType, cached, capitalize, isStatic, unique, tasInterface, recomArrs, createEventHandler, defer } from './packages/utils';
import { getCooick, setCooick, removeCooick } from './packages/cooick';
import { setLocalStorage, getLocalStorage, removeLocalStorage } from './packages/localStorage';
import { typeOf } from './packages/typeOf';
import { clipboard } from './packages/clipboard';
import { decopy } from './packages/decopy';
import { checkAlphabets, checkAppointLen, checkCID, checkChineseNumberEnglishUnderline, checkDChineseCharacterDetection, checkDateFormat, checkDecimalplaces, checkDomesticTelephone, checkEmail, checkFloat, checkHtml, checkIP, checkLowerCase, checkNegativeFloat, checkNonzeroNegative, checkNonzeroPositive, checkNotNegative, checkNotNegativeFloat, checkNotPositive, checkNotPositiveFloat, checkNotSpecial, checkNumberLength, checkNumberUnderscoreletter, checkOandTPositive, checkPND, checkPasswordSpecification, checkPhone, checkPositiveFloat, checkPositiveTDP, checkPostOffice, checkQQ, checkSpecialCharacters, checkStrComposedOfNumber, checkTwoDecimalplaces, checkUpperCase, checkUrl, checkZeroAndNonZero, interCheck, superInterCheck, appointLenInterCheck, appointLen, optionsInter } from './packages/regExp';
import { getAfterCountDays, getFirstDayOfSeason, getHoroscope, getTime, getLastDayOfMonth, getWeek, getYearDay, getYearWeek, dateDifference, dateFormat, remainderTime, TimeOptionsFunc, dateType, TimeFormal } from './packages/date';
export { decopy, defer, throttle, debounce, delay, getUrlKey, getRawType, cached, capitalize, isStatic, unique, recomArrs, createEventHandler, tasInterface, getCooick, setCooick, removeCooick, setLocalStorage, getLocalStorage, removeLocalStorage, typeOf, clipboard, checkAlphabets, checkAppointLen, checkCID, checkChineseNumberEnglishUnderline, checkDChineseCharacterDetection, checkDateFormat, checkDecimalplaces, checkDomesticTelephone, checkEmail, checkFloat, checkHtml, checkIP, checkLowerCase, checkNegativeFloat, checkNonzeroNegative, checkNonzeroPositive, checkNotNegative, checkNotNegativeFloat, checkNotPositive, checkNotPositiveFloat, checkNotSpecial, checkNumberLength, checkNumberUnderscoreletter, checkOandTPositive, checkPND, checkPasswordSpecification, checkPhone, checkPositiveFloat, checkPositiveTDP, checkPostOffice, checkQQ, checkSpecialCharacters, checkStrComposedOfNumber, checkTwoDecimalplaces, checkUpperCase, checkUrl, checkZeroAndNonZero, getAfterCountDays, getFirstDayOfSeason, getHoroscope, getTime, getLastDayOfMonth, getWeek, getYearDay, getYearWeek, dateDifference, dateFormat, remainderTime, TimeOptionsFunc, dateType, TimeFormal, interCheck, superInterCheck, appointLenInterCheck, appointLen, optionsInter };
declare const _default: {
    decopy: typeof decopy;
    strJson: <T>(str: string) => T;
    throttle: tasInterface;
    debounce: tasInterface;
    delay: <T_1>(dur?: number) => Promise<unknown>;
    getUrlKey: <T_2 extends string>(name: T_2) => string | null | undefined;
    getRawType: <T_3>(val: T_3) => string;
    cached: <T_4 extends Function>(fn: T_4) => Function;
    capitalize: <T_5 extends string>(val: T_5) => string;
    isStatic: <T_6>(val: T_6) => boolean;
    unique: <T_7 extends number[]>(arr: T_7) => any[];
    getCooick: typeof getCooick;
    setCooick: typeof setCooick;
    removeCooick: typeof removeCooick;
    setLocalStorage: typeof setLocalStorage;
    getLocalStorage: typeof getLocalStorage;
    removeLocalStorage: typeof removeLocalStorage;
    typeOf: (target: any) => "string" | "number" | "boolean" | "undefined" | "object" | "function" | "array" | "date" | "regExp" | "null" | "promise" | "regexp" | null;
    clipboard: ({ text, target }: {
        text?: string | number | undefined;
        target?: HTMLElement | undefined;
    }) => void;
    checkAlphabets: interCheck;
    checkAppointLen: appointLenInterCheck;
    checkCID: interCheck;
    checkChineseNumberEnglishUnderline: interCheck;
    checkDChineseCharacterDetection: interCheck;
    checkDateFormat: interCheck;
    checkDecimalplaces: interCheck;
    checkDomesticTelephone: interCheck;
    checkEmail: interCheck;
    checkFloat: interCheck;
    checkHtml: interCheck;
    checkIP: interCheck;
    checkLowerCase: interCheck;
    checkNegativeFloat: interCheck;
    checkNonzeroNegative: interCheck;
    checkNonzeroPositive: interCheck;
    checkNotNegative: interCheck;
    checkNotNegativeFloat: interCheck;
    checkNotPositive: interCheck;
    checkNotPositiveFloat: interCheck;
    checkNotSpecial: appointLenInterCheck;
    checkNumberLength: superInterCheck;
    checkNumberUnderscoreletter: interCheck;
    checkOandTPositive: interCheck;
    checkPND: interCheck;
    checkPasswordSpecification: appointLenInterCheck;
    checkPhone: interCheck;
    checkPositiveFloat: interCheck;
    checkPositiveTDP: interCheck;
    checkPostOffice: interCheck;
    checkQQ: interCheck;
    checkSpecialCharacters: interCheck;
    checkStrComposedOfNumber: interCheck;
    checkTwoDecimalplaces: interCheck;
    checkUpperCase: interCheck;
    checkUrl: interCheck;
    checkZeroAndNonZero: interCheck;
    getAfterCountDays: typeof getAfterCountDays;
    getFirstDayOfSeason: typeof getFirstDayOfSeason;
    getHoroscope: dateType;
    getTime: typeof getTime;
    getLastDayOfMonth: typeof getLastDayOfMonth;
    getWeek: () => string;
    getYearDay: () => number;
    getYearWeek: () => number;
    dateDifference: TimeOptionsFunc;
    dateFormat: typeof dateFormat;
    remainderTime: typeof remainderTime;
};
export default _default;
