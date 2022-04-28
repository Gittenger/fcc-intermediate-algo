import { sumPrimes } from './code'

test('function exists', () => {
  expect(sumPrimes).toBeDefined()
})

test('function returns string', () => {
  expect(typeof sumPrimes(10)).toBe('number')
})

test('check values', () => {
  expect(sumPrimes(10)).toStrictEqual(17)
  expect(sumPrimes(977)).toStrictEqual(73156)
})
