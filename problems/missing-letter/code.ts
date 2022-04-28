export function fearNotLetter(str: string): string | undefined {
  let charCode = str.charCodeAt(0)

  let i = 0
  while (i < str.length) {
    if (str.charCodeAt(i) !== charCode) return String.fromCharCode(charCode)
    i++
    charCode++
  }

  return undefined
}

/*
TIME
O(n)

SPACE
O(1)
*/
