export function steamrollArray(
  arr: any[],
  flattened: any[] = []
): any[] | ((arr: any[], flattened: any[]) => any[]) {
  arr.forEach((el) =>
    Array.isArray(el) ? steamrollArray(el, flattened) : flattened.push(el)
  )
  return flattened
}

steamrollArray([1, [2], [3, [[4]]]])

/*
TIME


SPACE

*/
