
/* -------------------------- UTILS ---------------------------- */
import {
  throttle,
  debounce,
  delay,
  getUrlKey,
  getRawType,
  cached,
  capitalize,
  isStatic,
  unique,

  tasInterface,
  recomArrs,
  strJson,
  createEventHandler,
  defer
} from './packages/utils'


/* --------------------------- cooick ----------------------------- */

import {
  getCooick,
  setCooick,
  removeCooick,
} from './packages/cooick'


/* --------------------------- localStorage ----------------------------- */

import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from './packages/localStorage'


/* --------------------------- typeOf ----------------------------- */
import { typeOf } from './packages/typeOf'


/* --------------------------- clipboard ----------------------------- */
import { clipboard } from './packages/clipboard'


/* --------------------------- decopy ----------------------------- */ 
import { decopy } from './packages/decopy'


/* --------------------------- regExp ----------------------------- */
import {
  checkAlphabets,
  checkAppointLen,
  checkCID,
  checkChineseNumberEnglishUnderline,
  checkDChineseCharacterDetection,
  checkDateFormat,
  checkDecimalplaces,
  checkDomesticTelephone,
  checkEmail,
  checkFloat,
  checkHtml,
  checkIP,
  checkLowerCase,
  checkNegativeFloat,
  checkNonzeroNegative,
  checkNonzeroPositive,
  checkNotNegative,
  checkNotNegativeFloat,
  checkNotPositive,
  checkNotPositiveFloat,
  checkNotSpecial,
  checkNumberLength,
  checkNumberUnderscoreletter,
  checkOandTPositive,
  checkPND,
  checkPasswordSpecification,
  checkPhone,
  checkPositiveFloat,
  checkPositiveTDP,
  checkPostOffice,
  checkQQ,
  checkSpecialCharacters,
  checkStrComposedOfNumber,
  checkTwoDecimalplaces,
  checkUpperCase,
  checkUrl,
  checkZeroAndNonZero,

  interCheck,
  superInterCheck,
  appointLenInterCheck,
  appointLen,
  optionsInter
} from './packages/regExp'


/* --------------------------- dete ----------------------------- */
import {
  getAfterCountDays,
  getFirstDayOfSeason,
  getHoroscope,
  getTime,
  getLastDayOfMonth,
  getWeek,
  getYearDay,
  getYearWeek,
  dateDifference,
  dateFormat,
  remainderTime,


  TimeOptionsFunc,
  dateType,
  TimeFormal

} from './packages/date'


export {
  decopy,
  defer,

  throttle,
  debounce,
  delay,
  getUrlKey,
  getRawType,
  cached,
  capitalize,
  isStatic,
  unique,
  recomArrs,
  createEventHandler,

  tasInterface,

  getCooick,
  setCooick,
  removeCooick,

  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,

  typeOf,
  clipboard,

  checkAlphabets,
  checkAppointLen,
  checkCID,
  checkChineseNumberEnglishUnderline,
  checkDChineseCharacterDetection,
  checkDateFormat,
  checkDecimalplaces,
  checkDomesticTelephone,
  checkEmail,
  checkFloat,
  checkHtml,
  checkIP,
  checkLowerCase,
  checkNegativeFloat,
  checkNonzeroNegative,
  checkNonzeroPositive,
  checkNotNegative,
  checkNotNegativeFloat,
  checkNotPositive,
  checkNotPositiveFloat,
  checkNotSpecial,
  checkNumberLength,
  checkNumberUnderscoreletter,
  checkOandTPositive,
  checkPND,
  checkPasswordSpecification,
  checkPhone,
  checkPositiveFloat,
  checkPositiveTDP,
  checkPostOffice,
  checkQQ,
  checkSpecialCharacters,
  checkStrComposedOfNumber,
  checkTwoDecimalplaces,
  checkUpperCase,
  checkUrl,
  checkZeroAndNonZero,

  getAfterCountDays,
  getFirstDayOfSeason,
  getHoroscope,
  getTime,
  getLastDayOfMonth,
  getWeek,
  getYearDay,
  getYearWeek,
  dateDifference,
  dateFormat,
  remainderTime,

  TimeOptionsFunc,
  dateType,
  TimeFormal,
  interCheck,
  superInterCheck,
  appointLenInterCheck,
  appointLen,
  optionsInter
}

export default {
  decopy,
  strJson,
  throttle,
  debounce,
  delay,
  getUrlKey,
  getRawType,
  cached,
  capitalize,
  isStatic,
  unique,

  getCooick,
  setCooick,
  removeCooick,

  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,

  typeOf,
  clipboard,

  checkAlphabets,
  checkAppointLen,
  checkCID,
  checkChineseNumberEnglishUnderline,
  checkDChineseCharacterDetection,
  checkDateFormat,
  checkDecimalplaces,
  checkDomesticTelephone,
  checkEmail,
  checkFloat,
  checkHtml,
  checkIP,
  checkLowerCase,
  checkNegativeFloat,
  checkNonzeroNegative,
  checkNonzeroPositive,
  checkNotNegative,
  checkNotNegativeFloat,
  checkNotPositive,
  checkNotPositiveFloat,
  checkNotSpecial,
  checkNumberLength,
  checkNumberUnderscoreletter,
  checkOandTPositive,
  checkPND,
  checkPasswordSpecification,
  checkPhone,
  checkPositiveFloat,
  checkPositiveTDP,
  checkPostOffice,
  checkQQ,
  checkSpecialCharacters,
  checkStrComposedOfNumber,
  checkTwoDecimalplaces,
  checkUpperCase,
  checkUrl,
  checkZeroAndNonZero,

  getAfterCountDays,
  getFirstDayOfSeason,
  getHoroscope,
  getTime,
  getLastDayOfMonth,
  getWeek,
  getYearDay,
  getYearWeek,
  dateDifference,
  dateFormat,
  remainderTime
}