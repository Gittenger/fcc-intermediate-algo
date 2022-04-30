export function checkCashRegister(
  price: number,
  cash: number,
  cid: Array<[string, number]>
): { status: string; change: any[] } {
  let change
  return { status: '', change: [] }
}

/*
TIME
O(n)

SPACE
O(1)
*/
