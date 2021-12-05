
export function ErrorMsg(msg: string): void {
  if (!msg) {
    return
  }
  throw new Error(msg)
}


export function logError(msg: string) {

  if (!msg) {
    return
  }
  
  console.error(msg)
}