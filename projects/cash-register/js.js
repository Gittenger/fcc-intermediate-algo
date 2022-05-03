function checkCashRegister(price = 0, cash = 0, cid = [['STRING', 1]]) {
  let changeDue = cash - price
  let status = '',
    change = []
  const values = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100,
  }

  const floatMath = (a = 2, b = 1, op = '+') =>
    op === '+'
      ? parseFloat((a + b).toFixed(2))
      : op === '-'
      ? parseFloat((a - b).toFixed(2))
      : a + b

  const getTotal = (changeArr) =>
    changeArr.reduce((acc, [denom, value]) => floatMath(acc, value, '+'), 0)

  const total = getTotal(cid)

  if (changeDue > total) status = 'INSUFFICIENT_FUNDS'
  else if (changeDue === total) (status = 'CLOSED'), (change = cid)
  else {
    status = 'OPEN'
    let i = cid.length - 1,
      currentChangeDue = changeDue

    while (i >= 0) {
      let [denom, value] = cid[i],
        currentDenomChange = 0

      if (values[denom] <= currentChangeDue) {
        while (
          value > 0 &&
          currentChangeDue > 0 &&
          values[denom] <= currentChangeDue
        ) {
          currentDenomChange = floatMath(currentDenomChange, values[denom], '+')
          currentChangeDue = floatMath(currentChangeDue, values[denom], '-')
          value = floatMath(value, values[denom], '-')
        }
        if (currentDenomChange > 0) change.push([denom, currentDenomChange])
      }
      i--
    }
  }
  if (getTotal(change) < changeDue)
    (status = 'INSUFFICIENT_FUNDS'), (change = [])

  return { status, change }
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
)

/*
TIME
O(n)

SPACE
O(1)
*/
