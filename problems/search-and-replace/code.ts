export function myReplace(str: string, before: string, after: string): string {
	const matchArr = str.match(before)
	return matchArr
		? matchArr[0].charAt(0).search(/[A-Z]/) === -1
			? str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
			: str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))
		: str
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'))
