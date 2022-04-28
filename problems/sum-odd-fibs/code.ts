export function sumFibs(num: number): number {
  const set: globalThis.Set<number> = new Set()

  let x: number = 0,
    y: number = 1,
    sum: number = 0

  while (sum <= num) {
    if (sum % 2 !== 0) {
      set.add(sum)
    }

    sum = x + y
    x = y
    y = sum
  }

  const iterator = set.values()
  let result = 1
  let next = iterator.next()

  while (!next.done) {
    result += next.value
    next = iterator.next()
  }

  return result
}

/*
TIME
O(n) where n is the number of steps in the fib sequence

SPACE
O(n)
*/
