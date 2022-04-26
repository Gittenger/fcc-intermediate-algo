import { palindrome } from './code'

test('function exists', () => {
	expect(palindrome).toBeDefined()
})

test('function returns string', () => {
	expect(typeof palindrome('test')).toBe('boolean')
})

test('check values', () => {
	expect(palindrome('eye')).toBe(true)
	expect(palindrome('_eye')).toBe(true)
	expect(palindrome('not a palindrome')).toBe(false)
	expect(palindrome('A man, a plan, a canal. Panama')).toBe(true)
})
