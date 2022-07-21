!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logError=t.ErrorMsg=void 0,t.ErrorMsg=function(e){if(e)throw new Error(e)},t.logError=function(e){e&&console.error(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typeOf=void 0;const n=r(0);t.typeOf=e=>{const t={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise"},r=Object.prototype.toString.call(e);return t.hasOwnProperty(r)?t[r]:((0,n.logError)("unable to recognise type: "+r),null)},t.default=t.typeOf},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.decopy=void 0;const o=n(r(1));function a(e){let t=e;switch((0,o.default)(t)){case"array":return t.map(e=>a(e));case"object":return Object.keys(t).reduce((e,r)=>(e[r]=a(t[r]),e),{});case"date":const e=new Date;return e.setTime(t.getTime()),e;case"regExp":let r=t.valueOf(),n="";return n+=r.global?"g":"",n+=r.ignoreCase?"i":"",n+=r.multiline?"m":"",new RegExp(r.source,n);default:return t}}t.decopy=a,t.default=a},,,,,,,function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getAfterCountDays=t.remainderTime=t.getYearWeek=t.getYearDay=t.getWeek=t.getFirstDayOfSeason=t.getLastDayOfMonth=t.getTime=t.dateFormat=t.dateDifference=t.getHoroscope=void 0;const o=r(10),a=r(0),u=n(r(1)),i=n(r(2));t.getHoroscope=e=>{if(!e)return(0,a.logError)("Date cannot be empty"),null;if(!(e=(0,o.dateUniFormat)(e)))return null;const t=new Date(e),r=t.getMonth()+1;return["摩羯","水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手","摩羯"][r-{true:1,false:0}[t.getDate()-14<"865778999988".charAt(r)]]+"座"};function s(e,t="{Y}-{MM}-{DD} {A} {t}:{ii}"){if(!e)return(0,a.logError)("date cannot be empty！"),null;if(!(e=(0,o.dateUniFormat)(e)))return null;const r=(e=new Date(e)).getHours(),n=r>12?r-12:r,u={Y:e.getFullYear(),M:e.getMonth()+1,MM:(0,o.parseNumber)(e.getMonth()+1),Mon:["一","二","三","四","五","六","七","八","九","十","十一","十二"][e.getMonth()],D:e.getDate(),DD:(0,o.parseNumber)(e.getDate()),h:r,hh:(0,o.parseNumber)(r),t:n,tt:(0,o.parseNumber)(n),A:r>12?"下午":"上午",i:e.getMinutes(),ii:(0,o.parseNumber)(e.getMinutes()),s:e.getSeconds(),ss:(0,o.parseNumber)(e.getSeconds())};for(;/\{([^}]+)\}/.test(t);)t=t.replace(/\{([^}]+)\}/,u[RegExp.$1]);return t}function c(e="{Y}-{MM}-{DD} {A} {t}:{ii}"){return s(new Date,e)}function l(e="date",t="{Y}-{MM}-{DD} {A} {t}:{ii}"){if("date"===e&&!t)return(0,a.logError)("formatStr is no value！！"),null;const r=new Date;return r.setMonth(r.getMonth()+1),r.setDate(0),"formatDate"===e?s(new Date(r),t):"date"===e?new Date(r):"day"===e?r.getDate():null}function f(e="date",t="{Y}-{MM}-{DD} {A} {t}:{ii}"){if("date"===e&&!t)return(0,a.logError)("formatStr is no value！！"),null;const r=new Date,n=r.getMonth();return n<3?r.setMonth(0):2<n&&n<6?r.setMonth(3):5<n&&n<9?r.setMonth(6):8<n&&n<11&&r.setMonth(9),r.setDate(1),"formatDate"===e?s(new Date(r),t):"date"===e?new Date(r):null}t.dateDifference=e=>{let{startTime:t,type:r,endTime:n}=(0,i.default)(e);if(!t)return(0,a.logError)("startTime cannot be empty！"),null;if(!(t=(0,o.dateUniFormat)(t)))return null;"string"===(0,u.default)(t)&&(0,o.convertTimestamps)(t)&&(t=(0,o.convertTimestamps)(t)),n&&"string"===(0,u.default)(n)&&(0,o.convertTimestamps)(n)&&(n=(0,o.convertTimestamps)(n));const s=t,c=n||(new Date).getTime(),l=Math.abs(c-s),f=Math.floor(l/864e5),d=l%864e5,g=Math.floor(d/36e5),m=d%36e5,p=Math.floor(m/6e4),D=m%6e4,b=Math.round(D/1e3);switch(r){case"day":return f+"天";case"hours":return g+"小时";case"minutes":return p+"分";case"seconds":return b+"秒";case"HoursMinutes":return g+"小时 "+p+"分";case"HoursMinutesSeconds":return g+"小时 "+p+"分 "+b+"秒 ";case"timeHours":return f+"天 "+g+"小时";case"timeHoursMinutes":return f+"天 "+g+"小时 "+p+"分";default:return f+"天 "+g+"小时 "+p+"分 "+b+"秒 "}},t.dateFormat=s,t.getTime=c,t.getLastDayOfMonth=l,t.getFirstDayOfSeason=f;t.getWeek=()=>"日一二三四五六".charAt((new Date).getDay());t.getYearDay=()=>(0,o.timeSpanPositioning)(1);t.getYearWeek=()=>(0,o.timeSpanPositioning)(7),t.remainderTime=function(){const e=new Date,t=(e.getFullYear()+1).toString(),r=new Date(new Date(t)-1).getTime()-e;return Math.floor(r/864e5)},t.getAfterCountDays=function(e,t){return t?0==e?new Date:(t=(0,o.dateUniFormat)(t))?((t=new Date(t)).setDate(t.getDate()+e),new Date(+t+288e5).toJSON().substr(0,19).replace("T"," ").replace(/-/g,"-")):null:((0,a.logError)("date is no value !!"),null)},t.default={getHoroscope:t.getHoroscope,dateDifference:t.dateDifference,dateFormat:s,getTime:c,getLastDayOfMonth:l,getFirstDayOfSeason:f,getWeek:t.getWeek,getYearDay:t.getYearDay,getYearWeek:t.getYearWeek}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.dateUniFormat=t.convertTimestamps=t.timeSpanPositioning=t.timeFormat=t.parseNumber=void 0;const o=r(0),a=n(r(1));function u(e){return e.toString().length<13?1e3*e:e}t.parseNumber=function(e){return e<10?0+e:e},t.timeFormat=u;t.timeSpanPositioning=(e=1)=>Math.ceil((new Date-new Date((new Date).getFullYear().toString()))/864e5/e),t.convertTimestamps=function(e){return/-/g.test(e)?new Date(e.replace(/-/g,"/")).getTime():((0,o.logError)("The date format is incorrect. The recommended format is standard timestamp, or date, or XXXX-XX-XX HH: mm: SS"),null)},t.dateUniFormat=function(e){return-1===["string","date","number"].indexOf((0,a.default)(e))?((0,o.logError)(`Expected string、number、date type, but got ${(0,a.default)(e)} type`),null):("number"===(0,a.default)(e)&&(e=u(e)),e)}}])}));