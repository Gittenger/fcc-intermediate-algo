export function smallestMult(arr: number[]): number {
  const [min, max] = arr.sort((a, b) => a - b)
  // fill array with nums in range
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)

  // recursive funcs
  // euclidean algorithm
  // O(log(min(a,b)))
  const gcd: (a: number, b: number) => number = (a: number, b: number) =>
    b === 0 ? a : gcd(b, a % b)

  // least common multiple formula
  // O(1) + O(log(min(a,b)))
  const lcm = (a: number, b: number) => a * (b / gcd(a, b))

  // works because lcm(a,b,c) -> lcm(a, lcm(b,c))
  // O(n), n == range length
  return range.reduce((mult, curr) => lcm(mult, curr))
}

smallestMult([2, 10])

/*
TIME
O(n) where n is size of range

SPACE
O(n)
*/
