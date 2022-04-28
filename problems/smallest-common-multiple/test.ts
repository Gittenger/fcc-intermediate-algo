import { smallestMult } from './code'

test('function exists', () => {
  expect(smallestMult).toBeDefined()
})

test('function returns number', () => {
  expect(typeof smallestMult([1, 5])).toBe('number')
})

test('check values', () => {
  expect(smallestMult([1, 5])).toStrictEqual(60)
  expect(smallestMult([5, 1])).toStrictEqual(60)
  expect(smallestMult([2, 10])).toStrictEqual(2520)
  expect(smallestMult([1, 13])).toStrictEqual(360360)
  expect(smallestMult([23, 18])).toStrictEqual(6056820)
})
