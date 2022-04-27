export function translatePigLatin(str: string): string {
	const match = str.match(/(?<prefix>[^aeiou]*)(?<rest>[aeiou]+.+)/)

	return match && match.groups
		? match.groups.prefix
			? `${match.groups.rest}${match.groups.prefix}ay`
			: `${match.groups.rest}way`
		: `${str}ay`
}

//console.log(translatePigLatin('schwartz'))

/*
TIME
O(n) + O(m)

SPACE
O(n) + O(m)
*/
