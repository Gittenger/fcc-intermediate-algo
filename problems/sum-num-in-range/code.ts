export const sumAll = (nums: number[]): number => {
	const [a, b] = nums
	let smallest = Math.min(a, b)
	let biggest = Math.max(a, b)

	let sum

	// nums equal, return sum
	if (a === b) sum = a + b
	else sum = smallest
	while (biggest > smallest) {
		sum += biggest
		biggest--
	}

	return sum
}

/* 
SPACE
O(1)

TIME
O(1)
*/
