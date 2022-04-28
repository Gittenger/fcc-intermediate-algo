const Person = require('./js.js')

const bob = new Person('Bob Ross')

test('class exists', () => {
  expect(Person).toBeDefined
})

test('instance of', () => {
  expect(bob instanceof Person).toBe(true)
})

test('test getters', () => {
  expect(bob.getFullName()).toBe('Bob Ross')
  expect(bob.getFirstName()).toBe('Bob')
  expect(bob.getLastName()).toBe('Ross')
})

test('test setters', () => {
  //change first name
  bob.setFirstName('Haskell')
  expect(bob.getFullName()).toBe('Haskell Ross')

  //change last name
  bob.setLastName('Curry')
  expect(bob.getFullName()).toBe('Haskell Curry')

  //change full name
  bob.setFullName('Alan Turing')
  expect(bob.getFullName()).toBe('Alan Turing')
  expect(bob.getFirstName()).toBe('Alan')
  expect(bob.getLastName()).toBe('Turing')
})
