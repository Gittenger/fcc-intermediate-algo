export const spinalCase = (str: string): string =>
	str
		.replace(/_/g, '-')
		.replace(/\s/g, '-')
		.replace(/([a-z])([A-Z])/g, (match, c1, c2) => `${c1}-${c2}`)
		.toLowerCase()

spinalCase('thisIsSpinalTap')

/* 
SPACE
O(n)

TIME
O(4n) -> O(n)
*/
