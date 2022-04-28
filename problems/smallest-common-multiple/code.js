"use strict";
exports.__esModule = true;
exports.smallestMult = void 0;
function smallestMult(arr) {
    var _a = arr.sort(), min = _a[0], max = _a[1];
    var range = Array(max - min + 1);
    var filled = range.fill(0).map(function (_, i) { return i + min; });
    var gcd = function (a, b) {
        return b === 0 ? a : gcd(b, a % b);
    };
    var lcm = function (a, b) { return a * (b / gcd(a, b)); };
    console.log(filled);
    return 0;
}
exports.smallestMult = smallestMult;
smallestMult([2, 5]);
/*
TIME


SPACE

*/
