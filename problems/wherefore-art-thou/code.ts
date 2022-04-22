export const whatIsInAName = (collection: Array<{}>, source: {}): Array<{}> =>
	collection.filter(el =>
		Object.keys(source).every(key => el[key] === source[key])
	)

/* 
SPACE
O(n)

TIME
O(nm) where m is size of source
*/
