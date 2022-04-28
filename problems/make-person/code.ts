//challenge for later -- convert to TS

interface Person {
  getFullName(): string
}

type ctor = {
  new (firstAndLast: string): Person
}

export const Person = function (this: Person, firstAndLast: string): string {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return ''
  }

  return new ctor('hello')
}
