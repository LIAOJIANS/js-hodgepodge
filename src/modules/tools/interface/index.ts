type tasInterface = (func: any, awai?: number) => void

type currencyInterface<T> = (val: T) => T

interface explorerInfoModel {
  type: string,
  version: number | boolean
}

export {
  tasInterface,
  currencyInterface,
  explorerInfoModel
}
