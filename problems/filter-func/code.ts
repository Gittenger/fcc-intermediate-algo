export function dropElements(
  arr: number[],
  func: (...args: number[]) => boolean
): number[] {
  const iterator = arr[Symbol.iterator]()
  let num = iterator.next()

  // iterate til func -> true
  while (!func(num.value) && !num.done) {
    num = iterator.next()
  }

  const result: number[] = []

  // if remaining elems, add to result
  while (!num.done) {
    result.push(num.value)
    num = iterator.next()
  }

  return result
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3
})

/*
TIME
O(n)

SPACE
O(n)
*/
