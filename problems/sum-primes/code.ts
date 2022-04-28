export function sumPrimes(num: number): number {
  const primes: globalThis.Set<number> = new Set()
  const composites: globalThis.Set<number> = new Set()

  for (let i = 2; i <= num; i++) {
    if (!composites.has(i)) {
      primes.add(i)

      for (let j = i * i; j <= num; j += i) {
        composites.add(j)
      }
    }
  }

  const iterator = primes.values()
  let next = iterator.next()
  let result = 0

  while (!next.done) {
    result += next.value
    next = iterator.next()
  }

  return result
}

sumPrimes(10)

/*
TIME
O(n(log(log(n)))) // n times harmonic progression of sum of primes sequence which is log(log(n))

SPACE
O(n) where n is the number of values in the sequence of N1...Nk where N1 is 1 and Nk is the parameter num
*/
