export function checkCashRegister(
  price: number,
  cash: number,
  cid: Array<[string, number]>
): { status: string; change: any[] } {
  // helper functions
  const floatMath = (a: number, b: number, op: string) =>
    op === '+'
      ? parseFloat((a + b).toFixed(2))
      : op === '-'
      ? parseFloat((a - b).toFixed(2))
      : a + b

  const getTotal = (changeArr: any[]) =>
    changeArr.reduce((acc, [denom, value]) => floatMath(acc, value, '+'), 0)

  // var init
  let changeDue = cash - price,
    status = '',
    change: any[] = [],
    values: {
      [key: string]: number
    } = {
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

  // O(n)
  const totalCid = getTotal(cid)

  // init edge cases
  if (changeDue > totalCid) status = 'INSUFFICIENT_FUNDS'
  else if (changeDue === totalCid) (status = 'CLOSED'), (change = cid)
  // calc change due
  else {
    status = 'OPEN'
    let i = cid.length - 1,
      currentChangeDue = changeDue

    // go through CID backwards
    // O(n)
    while (i >= 0) {
      let [denom, denomValInDrawer] = cid[i],
        currentDenomChange = 0
      let denomValue = values[denom]

      if (denomValue <= currentChangeDue) {
        while (
          // denom in drawer
          denomValInDrawer > 0 &&
          // still owe change
          currentChangeDue > 0 &&
          // denom can change current owed
          denomValue <= currentChangeDue
        ) {
          // increment current denom change
          // decrement change owed and denom in drawer
          currentDenomChange = floatMath(currentDenomChange, denomValue, '+')
          currentChangeDue = floatMath(currentChangeDue, denomValue, '-')
          denomValInDrawer = floatMath(denomValInDrawer, denomValue, '-')
        }
        // if giving change for current denom, add to result
        if (currentDenomChange > 0) change.push([denom, currentDenomChange])
      }
      i--
    }

    // if couldn't make change due to high denoms
    // O(n)
    if (getTotal(change) < changeDue)
      (status = 'INSUFFICIENT_FUNDS'), (change = [])
  }

  return { status, change }
}

/*
TIME
O(n) * 3 -> O(n)

SPACE
O(n)
*/
