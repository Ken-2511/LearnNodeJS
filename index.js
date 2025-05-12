/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (var i = 0; i < s.length; i++) {
        var currChar = s[i];
        if (map[currChar]) {
            stack.push(map[currChar]);
        } else if (stack.pop() !== currChar) {
            return false;
        }
    }
    return stack.length === 0;
};

// var isValid = function(s) {
//     remainStr = s;
//     while (remainStr.length > 0) {
//         var [flag, remainStr] = isValidHelper(remainStr, '');
//         if (!flag) {
//             return false;
//         }
//     }
//     return true;
// };

// /**
//  *
//  * @param {string} s
//  * @param {string} expectedChar
//  * @returns {boolean, string}
//  */
// var isValidHelper = function(s, expectedChar) {
//     const map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     };
//     if (s.length === 0) {
//         return expectedChar === '', '';
//     }
//     if (map[s[0]]) {
//         var [isValid, remainStr] = isValidHelper(s.slice(1), map[s[0]]);
//         if (isValid) {
//             return isValidHelper(remainStr, expectedChar);
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

var str = "(){}}{";
console.log(isValid(str)); // false
