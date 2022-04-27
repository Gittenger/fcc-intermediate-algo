"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("./code");
test('function exists', () => {
    expect(code_1.translatePigLatin).toBeDefined();
});
test('function returns array', () => {
    expect(typeof (0, code_1.translatePigLatin)('test')).toBe('string');
});
test('check values', () => {
    expect((0, code_1.translatePigLatin)('california')).toStrictEqual('aliforniacay');
    expect((0, code_1.translatePigLatin)('glove')).toStrictEqual('oveglay');
    expect((0, code_1.translatePigLatin)('algorithm')).toStrictEqual('algorithmway');
    expect((0, code_1.translatePigLatin)('schwartz')).toStrictEqual('artzschway');
});
