
export function ErrorMsg(msg: string): void {
    if(!msg) return
    // @ts-ignore
    throw new Error(msg)
}
