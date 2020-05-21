
interface objInter {
    value: any,
    distance: number,
    now: number
}

type localInter = (key: any, value: any, distance: number) => void

type onlyKet = (key: any) => void


export {
    objInter,
    localInter,
    onlyKet
}
