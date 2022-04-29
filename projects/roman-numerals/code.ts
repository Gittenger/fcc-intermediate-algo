export function convertToRoman(num: number): string {
  // dictionary for lookups
  const smallObj: { [key: string]: any } = {
    ones: {
      end: 'I',
      mid: 'V',
      next: 'X',
    },
    tens: {
      end: 'X',
      mid: 'L',
      next: 'C',
    },
    hundreds: {
      end: 'C',
      mid: 'D',
      next: 'M',
    },
    thousands: {
      end: 'M',
      mid: 'V',
      next: 'X',
    },
    tenThousands: {
      end: 'X',
    },
  }

  // create array of digit length helper
  const arrayFromDigit = (digit: number): any[] => Array.from(Array(digit))

  // process digit based on place helper
  const processDigit = (
    digit: number,
    place: { end: string; mid: string; next: string }
  ): string =>
    digit < 4
      ? arrayFromDigit(digit).fill(place.end).join('')
      : digit === 4
      ? `${place.end}${place.mid}`
      : digit === 5
      ? place.mid
      : digit > 5 && digit < 9
      ? `${place.mid}${arrayFromDigit(digit - 5)
          .fill(place.end)
          .join('')}`
      : digit === 9
      ? `${place.end}${place.next}`
      : 'error'

  // convert num to string, reverse to prep for loop
  // O(n), n == length of num
  const strNum = num.toString().split('').reverse().join('')
  let result: string[] = []
  let i = 0

  // process each digit
  // O(n), n == length of num
  while (i < strNum.length) {
    const digit = parseInt(strNum.charAt(i))

    result.unshift(
      i === 0
        ? processDigit(digit, smallObj.ones)
        : i === 1
        ? processDigit(digit, smallObj.tens)
        : i === 2
        ? processDigit(digit, smallObj.hundreds)
        : i === 3
        ? processDigit(digit, smallObj.thousands)
        : i === 4
        ? processDigit(digit, smallObj.tenThousands)
        : 'error'
    )

    i++
  }

  return result.join('')
}

console.log(convertToRoman(103))

/*
TIME
O(n)

SPACE
O(n)
*/
