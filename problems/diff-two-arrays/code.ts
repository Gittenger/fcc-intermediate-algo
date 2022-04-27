export const diffArray = (arr1: any[], arr2: any[]): any[] => {
	// o(n) + o(m) set creation
	const set1 = new Set(arr1)
	const set2 = new Set(arr2)
	const result: any[] = []

	// o(n) + o(m) iter through each arr
	arr1.forEach(el => (!set2.has(el) ? result.push(el) : undefined))

	arr2.forEach(el => (!set1.has(el) ? result.push(el) : undefined))

	return result
}

/*
TIME
O(n) + O(m)

SPACE
O(n) + O(m)
*/
