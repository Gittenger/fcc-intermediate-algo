import { spinalCase } from './code'

test('function exists', () => {
	expect(spinalCase).toBeDefined()
})

test('function returns string', () => {
	expect(typeof spinalCase('test')).toBe('string')
})

test('check values', () => {
	expect(spinalCase('This Is Spinal Tap')).toBe('this-is-spinal-tap')
	expect(spinalCase('thisIsSpinalTap')).toBe('this-is-spinal-tap')
	expect(spinalCase('The_Andy_Griffith_Show')).toBe('the-andy-griffith-show')
	expect(spinalCase('AllThe-small Things')).toBe('all-the-small-things')
})
