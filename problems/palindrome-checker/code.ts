export function palindrome(str: string): boolean {
	const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

	let i = 0,
		j = cleaned.length - 1
	while (i <= j) {
		if (cleaned.charAt(i) !== cleaned.charAt(j)) return false

		i++
		j--
	}
	return true
}
