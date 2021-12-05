import { logError } from "./Error"

export const typeOf = (target: any): 'boolean' | 'number' | 'string' | 'function' | 'array' | 'date' | 'regExp' | 'undefined' | 'null' | 'object' | 'promise' | 'regexp' | null => {
  const toString = Object.prototype.toString

  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
    '[object Promise]': 'promise'
  }

  const desc = toString.call(target)

  if(map.hasOwnProperty(desc)) {
    // @ts-ignore
    return map[desc]
  } else {
    logError(`unable to recognise type: ${ desc }`)
    
    return null
  }
}

export default typeOf