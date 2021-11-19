/* 
    Task 

    * Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

*/

/**
 *  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * 
 *  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

// Hacker Rank Plataform Code
function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    // ============My code================= //
    console.log(arr.reverse().join(' '));
}

// =================== //
const arr = [1,2,3,4,5,6,7,8,9,10,11,12];

function reverveArray(arr) {
    return arr.reverse().join(' ');
}

// Arrow Function
const reverseArray = arr => arr.reverse().join(' ');

console.log(reverseArray(arr)); // 12 11 10 9 8 7 6 5 4 3 2 1