"use strict";
exports.__esModule = true;
exports.convertToRoman = void 0;
function convertToRoman(num) {
    var obj = {
        ones: {
            '1': 'I',
            '2': 'II',
            '3': 'III',
            '4': 'IV',
            '5': 'V',
            '6': 'VI',
            '7': 'VII',
            '8': 'VIII',
            '9': 'IX'
        },
        tens: {
            '1': 'X',
            '2': 'XX',
            '3': 'XXX',
            '4': 'XL',
            '5': 'L',
            '6': 'LX',
            '7': 'LXX',
            '8': 'LXXX',
            '9': 'XC'
        },
        hundreds: {
            '1': 'C',
            '2': 'CC',
            '3': 'CCC',
            '4': 'CD',
            '5': 'D',
            '6': 'DC',
            '7': 'DCC',
            '8': 'DCCC',
            '9': 'CM'
        },
        thousands: {
            '1': 'M',
            '2': 'MM',
            '3': 'MMM',
            '4': 'MV',
            '5': 'V',
            '6': 'VM',
            '7': 'VMM',
            '8': 'VMMM',
            '9': 'MX'
        },
        tenThousands: {
            '1': 'X'
        }
    };
    var smallObj = {
        ones: {
            end: 'I',
            mid: 'V',
            next: 'X'
        },
        tens: {
            end: 'X',
            mid: 'L',
            next: 'C'
        },
        hundreds: {
            end: 'C',
            mid: 'D',
            next: 'M'
        },
        thousands: {
            end: 'M',
            mid: 'V',
            next: 'X'
        },
        tenThousands: {
            end: 'X'
        }
    };
    var strNum = num.toString().split('').reverse().join('');
    var i = 0;
    var arrayFromDigit = function (digit) { return Array.from(Array(digit)); };
    var processDigit = function (digit, place) {
        return digit < 4
            ? arrayFromDigit(digit).fill(place.end).join('')
            : digit === 4
                ? "".concat(place.end).concat(place.mid)
                : digit === 5
                    ? place.mid
                    : digit > 5 && digit < 9
                        ? "".concat(place.mid).concat(arrayFromDigit(digit - 5)
                            .fill(place.end)
                            .join(''))
                        : digit === 9
                            ? "".concat(place.end).concat(place.next)
                            : 'error';
    };
    var result = [];
    while (i < strNum.length) {
        var digit = parseInt(strNum.charAt(i));
        result.unshift(i === 0
            ? processDigit(digit, smallObj.ones)
            : i === 1
                ? processDigit(digit, smallObj.tens)
                : i === 2
                    ? processDigit(digit, smallObj.hundreds)
                    : i === 3
                        ? processDigit(digit, smallObj.thousands)
                        : i === 4
                            ? processDigit(digit, smallObj.tenThousands)
                            : 'error');
        i++;
    }
    return result.join('');
}
exports.convertToRoman = convertToRoman;
console.log(convertToRoman(103));
/*
TIME


SPACE

*/
