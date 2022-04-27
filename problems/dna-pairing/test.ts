import { pairElement } from './code'

test('function exists', () => {
	expect(pairElement).toBeDefined()
})

test('function returns array', () => {
	expect(Array.isArray(pairElement('test'))).toBe(true)
})

test('check values', () => {
	expect(pairElement('ATCGA')).toStrictEqual([
		['A', 'T'],
		['T', 'A'],
		['C', 'G'],
		['G', 'C'],
		['A', 'T'],
	])
	expect(pairElement('TTGAG')).toStrictEqual([
		['T', 'A'],
		['T', 'A'],
		['G', 'C'],
		['A', 'T'],
		['G', 'C'],
	])
	expect(pairElement('CTCTA')).toStrictEqual([
		['C', 'G'],
		['T', 'A'],
		['C', 'G'],
		['T', 'A'],
		['A', 'T'],
	])
})
