export function uniteUnique(...arrs: Array<number[]>): number[] {
  const set = new Set()
  const result: number[] = []

  arrs.forEach((arr) =>
    arr.forEach((el) => {
      if (!set.has(el)) {
        set.add(el)
        result.push(el)
      }
    })
  )
  return result
}

/*
TIME
O(n) where n is the total number of elements in all arrays

SPACE
O(n)
*/
