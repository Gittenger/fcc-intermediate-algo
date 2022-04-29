export function binaryAgent(str: string): string {
  return str
    .split(' ')
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join('')
}

/*
TIME
O(n)

SPACE
O(n)
*/
