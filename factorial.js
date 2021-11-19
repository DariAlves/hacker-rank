/*
    Task

    * Write a factorial function that takes a positive integer, 
        N as a parameter and prints the result of N! (N factorial).

    Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial,
    you will get a score of 0.

*/

// For Loop
function factorial(n) {
    let a = 1;
    for(let i = 1; i <= n; i++) {
        a *= i;
    }
    return a;
}

// Função Recursiva
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return factorial(n - 1) * n;
}

// Função Recursiva com ternário
function factorial(n) {
    return (n === 0) ? 1 : factorial(n - 1) * n;
}

// Arrow Function com ternário
const factorial = n => (n === 0) ? 1 : factorial(n - 1) * n;

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2 
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120