import { convertToRoman } from './code'

test('function exists', () => {
  expect(convertToRoman).toBeDefined()
})

test('function returns string', () => {
  expect(typeof convertToRoman(3)).toBe('string')
})

test('check values', () => {
  expect(convertToRoman(2)).toStrictEqual('II')
  expect(convertToRoman(3)).toStrictEqual('III')
  expect(convertToRoman(4)).toStrictEqual('IV')
  expect(convertToRoman(5)).toStrictEqual('V')
  expect(convertToRoman(9)).toStrictEqual('IX')
  expect(convertToRoman(12)).toStrictEqual('XII')
  expect(convertToRoman(16)).toStrictEqual('XVI')
  expect(convertToRoman(29)).toStrictEqual('XXIX')
  expect(convertToRoman(44)).toStrictEqual('XLIV')
  expect(convertToRoman(45)).toStrictEqual('XLV')
  expect(convertToRoman(68)).toStrictEqual('LXVIII')
  expect(convertToRoman(83)).toStrictEqual('LXXXIII')
  expect(convertToRoman(97)).toStrictEqual('XCVII')
  expect(convertToRoman(99)).toStrictEqual('XCIX')
  expect(convertToRoman(400)).toStrictEqual('CD')
  expect(convertToRoman(500)).toStrictEqual('D')
  expect(convertToRoman(501)).toStrictEqual('DI')
  expect(convertToRoman(649)).toStrictEqual('DCXLIX')
  expect(convertToRoman(798)).toStrictEqual('DCCXCVIII')
  expect(convertToRoman(891)).toStrictEqual('DCCCXCI')
  expect(convertToRoman(1000)).toStrictEqual('M')
  expect(convertToRoman(1004)).toStrictEqual('MIV')
  expect(convertToRoman(1006)).toStrictEqual('MVI')
  expect(convertToRoman(1023)).toStrictEqual('MXXIII')
  expect(convertToRoman(2014)).toStrictEqual('MMXIV')
  expect(convertToRoman(3999)).toStrictEqual('MMMCMXCIX')
})
