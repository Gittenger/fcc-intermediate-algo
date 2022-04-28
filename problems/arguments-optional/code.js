function addTogether(a, b) {
    return b ? a + b : function (b) { return a + b; };
}
console.log(addTogether(5)(7));
/*
TIME
O(n)

SPACE
O(1)
*/
