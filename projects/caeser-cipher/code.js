"use strict";
exports.__esModule = true;
exports.rot13 = void 0;
function rot13(str) {
    var isNonAlpha = function (char) { return new RegExp(/\W|_/).test(char); };
    var result = '';
    var i = 0;
    while (i < str.length) {
        // get char, don't transform if non alpha
        var char = str.charAt(i);
        if (isNonAlpha(char)) {
            result += char;
            i++;
            continue;
        }
        // is alpha, apply cipher
        // utf-16 bounds are 65 and 90
        var newCode = char.charCodeAt(0) + 13;
        if (newCode > 90)
            newCode -= 26;
        result += String.fromCharCode(newCode);
        i++;
    }
    return result;
}
exports.rot13 = rot13;
console.log(rot13('SERR PBQR PNZC!'));
/*
TIME


SPACE

*/
