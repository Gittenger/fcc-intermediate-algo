export function pairElement(str: string): Array<string[]> {
  const result: Array<string[]> = []
  const pairs: {
    [key: string]: string
  } = {
    'A': 'T',
    'C': 'G',
    'T': 'A',
    'G': 'C',
  }

  for (let char of str) {
    result.push([char, pairs[char]])
  }
  return result
}

//console.log(translatePigLatin('schwartz'))

/*
TIME
O(n)

SPACE
O(n)
*/
