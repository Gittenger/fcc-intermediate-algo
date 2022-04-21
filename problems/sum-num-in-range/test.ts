import { sumAll } from './code'

test('function exists', () => {
	expect(sumAll).toBeDefined()
})

test('function returns num', () => {
	expect(typeof sumAll([4, 1])).toBe('number')
})

test('check values', () => {
	expect(sumAll([1, 4])).toBe(10)
	expect(sumAll([4, 1])).toBe(10)
	expect(sumAll([5, 10])).toBe(45)
	expect(sumAll([10, 5])).toBe(45)
})
