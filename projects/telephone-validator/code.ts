export function telephoneCheck(str: string): boolean {
  const regex = new RegExp(/^1?\s?(\(\d{3}\)|\d{3})(-|\s)?\d{3}[-|\s]?\d{4}$/)
  return regex.test(str)
}

/*
TIME
O(n)

SPACE
O(1)
*/
