export function rot13(str: string): string {
  const isNonAlpha = (char: string) => new RegExp(/\W|_/).test(char)

  let result = ''
  let i = 0
  while (i < str.length) {
    // get char, don't transform if non alpha
    const char = str.charAt(i)
    if (isNonAlpha(char)) {
      result += char
      i++
      continue
    }

    // is alpha, apply cipher
    // utf-16 bounds are 65 and 90
    let newCode = char.charCodeAt(0) + 13
    if (newCode > 90) newCode -= 26

    result += String.fromCharCode(newCode)
    i++
  }
  return result
}

console.log(rot13('SERR PBQR PNZC!'))

/*
TIME
O(n)

SPACE
O(n)
*/
