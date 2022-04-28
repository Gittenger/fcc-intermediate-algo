import { truthCheck } from './code'

test('function exists', () => {
  expect(truthCheck).toBeDefined()
})

test('function returns bool', () => {
  expect(typeof truthCheck([{}], 'test')).toBe('boolean')
})

test('check values', () => {
  expect(
    truthCheck(
      [
        { name: 'Quincy', role: 'Founder', isBot: false },
        { name: 'Naomi', role: '', isBot: false },
        { name: 'Camperbot', role: 'Bot', isBot: true },
      ],
      'isBot'
    )
  ).toStrictEqual(false)
  expect(
    truthCheck(
      [
        { name: 'Quincy', role: 'Founder', isBot: false },
        { name: 'Naomi', role: '', isBot: false },
        { name: 'Camperbot', role: 'Bot', isBot: true },
      ],
      'name'
    )
  ).toStrictEqual(true)
  expect(
    truthCheck(
      [
        { name: 'Quincy', role: 'Founder', isBot: false },
        { name: 'Naomi', role: '', isBot: false },
        { name: 'Camperbot', role: 'Bot', isBot: true },
      ],
      'role'
    )
  ).toStrictEqual(false)
  expect(
    truthCheck(
      [
        { name: 'Pikachu', number: 25, caught: 3 },
        { name: 'Togepi', number: 175, caught: 1 },
      ],
      'number'
    )
  ).toStrictEqual(true)
  expect(
    truthCheck(
      [
        { name: 'Pikachu', number: 25, caught: 3 },
        { name: 'Togepi', number: 175, caught: 1 },
        { name: 'MissingNo', number: NaN, caught: 0 },
      ],
      'caught'
    )
  ).toStrictEqual(false)
  expect(
    truthCheck(
      [
        {
          id: 1,
          data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' },
        },
        {
          id: 2,
          data: {
            url: 'https://coderadio.freecodecamp.org/',
            name: 'CodeRadio',
          },
        },
        { id: null, data: {} },
      ],
      'data'
    )
  ).toStrictEqual(true)
  expect(
    truthCheck(
      [
        {
          id: 1,
          data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' },
        },
        {
          id: 2,
          data: {
            url: 'https://coderadio.freecodecamp.org/',
            name: 'CodeRadio',
          },
        },
        { id: null, data: {} },
      ],
      'id'
    )
  ).toStrictEqual(false)
})
