import { addTogether } from './code'

test('function exists', () => {
  expect(addTogether).toBeDefined()
})

test('function returns number', () => {
  expect(typeof addTogether(2, 3)).toBe('number')
})

test('check values', () => {
  expect(addTogether(2, 3)).toStrictEqual(5)
  expect(addTogether(23, 30)).toStrictEqual(53)
  expect(addTogether(5)(7)).toStrictEqual(12)
  expect(
    addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  ).toStrictEqual(undefined)
  expect(addTogether(2, '3')).toStrictEqual(undefined)
  expect(addTogether(2)([3])).toStrictEqual(undefined)
  expect(addTogether('2', 3)).toStrictEqual(undefined)
})
