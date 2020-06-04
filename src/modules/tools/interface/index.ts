
interface disableCopyInter {
  type? : 'all' | 'contextmenu' | 'selectstart' | 'copy'
}

type tasInterface = (func: any, awai?: number) => void

type currencyInterface<T> = (val: T) => T

export {
  tasInterface,
  currencyInterface,
  disableCopyInter
}
