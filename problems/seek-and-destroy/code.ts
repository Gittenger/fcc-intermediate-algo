export const destroyer = (arr1: any[], ...args: any[]): any[] => {
	const set = new Set(args)

	return arr1.filter(el => !set.has(el))
}

/*
TIME
O(n) + O(m) where m === num of args

SPACE
O(n) + O(m) where m === num of args

*/
