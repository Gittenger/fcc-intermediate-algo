import { sumFibs } from './code'

test('function exists', () => {
  expect(sumFibs).toBeDefined()
})

test('function returns string', () => {
  expect(typeof sumFibs(10)).toBe('number')
})

test('check values', () => {
  expect(sumFibs(1000)).toStrictEqual(1785)
  expect(sumFibs(4000000)).toStrictEqual(4613732)
  expect(sumFibs(4)).toStrictEqual(5)
  expect(sumFibs(75024)).toStrictEqual(60696)
  expect(sumFibs(75025)).toStrictEqual(135721)
})
