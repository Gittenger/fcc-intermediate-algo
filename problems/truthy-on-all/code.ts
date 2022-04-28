interface Collection<T> {
  [key: string]: any
}

export const truthCheck = (
  collection: Collection<any>[],
  pre: string
): boolean => {
  let i = 0

  while (i < collection.length) {
    if (!collection[i][pre]) return false
    i++
  }

  return true
}

/*
TIME
O(n)

SPACE
O(1)
*/
