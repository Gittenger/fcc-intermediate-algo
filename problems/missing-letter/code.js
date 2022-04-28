"use strict";
exports.__esModule = true;
exports.fearNotLetter = void 0;
function fearNotLetter(str) {
    var testString = 'abcdefghijklmnopqrstuvwxyz';
    var start = testString.indexOf(str.charAt(0));
    var end = str.length + start;
    var compare = testString.slice(start, end);
    console.log(compare);
    return str;
}
exports.fearNotLetter = fearNotLetter;
fearNotLetter('bcdef');
/*
TIME
O(n)

SPACE
O(n)
*/
