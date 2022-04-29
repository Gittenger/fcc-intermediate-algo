import { rot13 } from './code'

test('function exists', () => {
  expect(rot13).toBeDefined()
})

test('function returns string', () => {
  expect(typeof rot13('')).toBe('string')
})

test('check values', () => {
  expect(rot13('SERR PBQR PNZC')).toStrictEqual('FREE CODE CAMP')
  expect(rot13('SERR CVMMN!')).toStrictEqual('FREE PIZZA!')
  expect(rot13('SERR YBIR?')).toStrictEqual('FREE LOVE?')
  expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toStrictEqual(
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
  )
})
