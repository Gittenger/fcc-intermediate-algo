"use strict";
exports.__esModule = true;
exports.sumPrimes = void 0;
function sumPrimes(num) {
    var primes = new Set();
    var composites = new Set();
    for (var i = 2; i <= num; i++) {
        if (!composites.has(i)) {
            primes.add(i);
            for (var j = 2; j * i <= num; j++) {
                composites.add(j * i);
            }
        }
    }
    console.log(primes);
    var iterator = primes.values();
    var next = iterator.next();
    var result = 0;
    while (!next.done) {
        result += next.value;
        next = iterator.next();
    }
    return result;
}
exports.sumPrimes = sumPrimes;
sumPrimes(10);
