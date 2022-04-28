"use strict";
exports.__esModule = true;
exports.sumFibs = void 0;
function sumFibs(num) {
    var set = new Set();
    1 + 1 + 2 + 3 + 5 + 8;
    var x = 0, y = 1, sum = 0;
    while (sum < num) {
        if (sum % 2 !== 0) {
            set.add(sum);
        }
        sum = x + y;
        x = y;
        y = sum;
    }
    var iterator = set.values();
    var result = 1;
    var next = iterator.next();
    while (!next.done) {
        result += next.value;
        next = iterator.next();
    }
    console.log(result);
    return result;
}
exports.sumFibs = sumFibs;
sumFibs(10);
/*
TIME
O(n) where n is the total number of elements in all arrays

SPACE
O(n)
*/
