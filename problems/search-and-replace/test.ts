import { myReplace } from './code'

test('function exists', () => {
	expect(myReplace).toBeDefined()
})

test('function returns string', () => {
	expect(typeof myReplace('test', 'test', 'test')).toBe('string')
})

test('check values', () => {
	expect(myReplace('Let us go to the store', 'store', 'mall')).toBe(
		'Let us go to the mall'
	)
	expect(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toBe(
		'He is Sitting on the couch'
	)
})
