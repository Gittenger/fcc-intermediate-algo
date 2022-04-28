"use strict";
exports.__esModule = true;
exports.steamrollArray = void 0;
function steamrollArray(arr) {
    var goDeeper = function (element) {
        return Array.isArray(element) ? goDeeper(element) : element;
    };
    return arr.map(goDeeper);
}
exports.steamrollArray = steamrollArray;
steamrollArray([[['a']], [['b']]]);
/*
TIME


SPACE

*/
