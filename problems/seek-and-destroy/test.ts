import { destroyer } from './code'

test('function exists', () => {
	expect(destroyer).toBeDefined()
})

test('function returns array', () => {
	expect(Array.isArray(destroyer([1, 2, 3, 1, 2, 3], 2, 3))).toBe(true)
})

test('check values', () => {
	expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toStrictEqual([1, 1])
	expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toStrictEqual([1, 5, 1])
})
