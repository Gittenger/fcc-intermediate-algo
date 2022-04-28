import { steamrollArray } from './code'

test('function exists', () => {
  expect(steamrollArray).toBeDefined()
})

test('function returns array', () => {
  expect(Array.isArray(steamrollArray([]))).toBe(true)
})

test('check values', () => {
  expect(steamrollArray([[['a']], [['b']]])).toStrictEqual(['a', 'b'])
  expect(steamrollArray([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4])
  expect(steamrollArray([1, [], [3, [[4]]]])).toStrictEqual([1, 3, 4])
  expect(steamrollArray([1, {}, [3, [[4]]]])).toStrictEqual([1, {}, 3, 4])
})
