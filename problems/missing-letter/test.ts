import { fearNotLetter } from './code'

test('function exists', () => {
  expect(fearNotLetter).toBeDefined()
})

test('function returns string', () => {
  expect(typeof fearNotLetter('abce')).toBe('string')
})

test('check values', () => {
  expect(fearNotLetter('abce')).toStrictEqual('d')
  expect(fearNotLetter('abcdefghjklmno')).toStrictEqual('i')
  expect(fearNotLetter('stvwx')).toStrictEqual('u')
  expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toStrictEqual(undefined)
})
