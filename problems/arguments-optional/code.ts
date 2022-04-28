export function addTogether(a: any): (a: any) => number | undefined
export function addTogether(a: any, b: any): number | undefined

export function addTogether(a: any, b?: any) {
  return typeof a !== 'number'
    ? undefined
    : b === undefined
    ? (b: any) => addTogether(a, b)
    : typeof b !== 'number'
    ? undefined
    : a + b
}
console.log(addTogether(5)(7))

/*
TIME
O(n)

SPACE
O(1)
*/
