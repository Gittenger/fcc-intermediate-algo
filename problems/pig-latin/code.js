"use strict";
exports.__esModule = true;
exports.translatePigLatin = void 0;
function translatePigLatin(str) {
    var match = str.match(/(?<prefix>[^aeiou]*)(?<rest>[aeiou]+.+)/);
    return match ? match : 'none';
    // return match && match.groups
    // 	? match.groups.prefix
    // 		? `${match.groups.rest}${match.groups.prefix}ay`
    // 		: `${match.groups.rest}way`
    // 	: str
}
exports.translatePigLatin = translatePigLatin;
//console.log(translatePigLatin('schwartz'))
console.log(translatePigLatin('rhythm'));
/*
TIME
O(n) + O(m)

SPACE
O(n) + O(m)
*/
