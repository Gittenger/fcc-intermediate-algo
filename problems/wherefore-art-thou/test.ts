import { whatIsInAName } from './code'

test('function exists', () => {
	expect(whatIsInAName).toBeDefined()
})

test('function returns array', () => {
	expect(
		Array.isArray(
			whatIsInAName(
				[
					{ first: 'Romeo', last: 'Montague' },
					{ first: 'Mercutio', last: null },
					{ first: 'Tybalt', last: 'Capulet' },
				],
				{ last: 'Capulet' }
			)
		)
	).toBe(true)
})

test('check values', () => {
	expect(
		whatIsInAName(
			[
				{ first: 'Romeo', last: 'Montague' },
				{ first: 'Mercutio', last: null },
				{ first: 'Tybalt', last: 'Capulet' },
			],
			{ last: 'Capulet' }
		)
	).toStrictEqual([{ first: 'Tybalt', last: 'Capulet' }])
	expect(
		whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
			apple: 1,
		})
	).toStrictEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }])
})
