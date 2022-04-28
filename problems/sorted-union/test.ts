import { uniteUnique } from './code'

test('function exists', () => {
  expect(uniteUnique).toBeDefined()
})

test('function returns string', () => {
  expect(Array.isArray(uniteUnique([1, 2, 3], [1, 2, 3, 4]))).toBe(true)
})

test('check values', () => {
  expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toStrictEqual([
    1, 3, 2, 5, 4,
  ])
  expect(uniteUnique([1, 2, 3], [5, 2, 1])).toStrictEqual([1, 2, 3, 5])
  expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toStrictEqual(
    [1, 2, 3, 5, 4, 6, 7, 8]
  )
  expect(uniteUnique([1, 3, 2], [5, 4], [5, 6])).toStrictEqual([
    1, 3, 2, 5, 4, 6,
  ])
  expect(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])).toStrictEqual([
    1, 3, 2, 5, 4,
  ])
})
