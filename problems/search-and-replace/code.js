"use strict";
exports.__esModule = true;
exports.myReplace = void 0;
function myReplace(str, before, after) {
    var matchArr = str.match(before);
    var match = matchArr ? matchArr[0] : '';
    if (match.charAt(0).search(/[A-Z]/) === -1) {
        return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1));
    }
    return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
}
exports.myReplace = myReplace;
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
