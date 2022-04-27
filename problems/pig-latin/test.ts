import { translatePigLatin } from './code'

test('function exists', () => {
	expect(translatePigLatin).toBeDefined()
})

test('function returns string', () => {
	expect(typeof translatePigLatin('test')).toBe('string')
})

test('check values', () => {
	expect(translatePigLatin('california')).toStrictEqual('aliforniacay')
	expect(translatePigLatin('glove')).toStrictEqual('oveglay')
	expect(translatePigLatin('algorithm')).toStrictEqual('algorithmway')
	expect(translatePigLatin('schwartz')).toStrictEqual('artzschway')
	expect(translatePigLatin('rhythm')).toStrictEqual('rhythmay')
})
