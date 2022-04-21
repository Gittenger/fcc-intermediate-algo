import { diffArray } from './code'

test('function exists', () => {
	expect(diffArray).toBeDefined()
})

test('function returns array', () => {
	expect(Array.isArray(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe(true)
})

test('check values', () => {
	expect(
		diffArray(
			['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
			['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
		)
	).toStrictEqual(['pink wool'])
})
