import typeOf from "./typeOf"

// 深拷贝
export function decopy<T>(data: T): T {
  let val = data as any

  switch (typeOf(val)) {
    case 'array':
      return val.map((c: any) => decopy(c))
    case 'object':
      return Object.keys(val).reduce((ret: any, key: string) => {
        ret[key] = decopy(val[key])
        return ret
      }, {})
    case 'date':
      const newDate = new Date()
      newDate.setTime(val.getTime())
      return newDate as any

    case 'regExp':
      let pattern = val.valueOf()
      let flags = ''
      flags += pattern.global ? 'g' : '';
      flags += pattern.ignoreCase ? 'i' : '';
      flags += pattern.multiline ? 'm' : '';

      return new RegExp(pattern.source, flags) as any

    default:
      return val
  }
}

export default decopy
