export default {
  read: (val: string) => {
    if(val[0] === '"') {
      val = val.slice(1, -1)
    }

    return val.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },

  write: (val: string) => {
    return encodeURIComponent(val).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
}