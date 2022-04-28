const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast
  let [firstName, lastName] = fullName.split(' ')

  this.getFullName = () => `${firstName} ${lastName}`
  this.getFirstName = () => firstName
  this.getLastName = () => lastName

  this.setFirstName = (nameStr) => (firstName = nameStr)
  this.setLastName = (nameStr) => (lastName = nameStr)
  this.setFullName = (nameStr) => {
    fullName = nameStr
    ;[firstName, lastName] = fullName.split(' ')
  }

  return firstAndLast
}

const bob = new Person('Bob Ross')
bob.getFullName()

module.exports = Person
