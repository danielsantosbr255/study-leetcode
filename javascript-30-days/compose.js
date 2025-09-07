// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};

// Example 1:
const fn1 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn1(4)); // Output: 65

// Example 2:
const fn2 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn2(1)); // Output: 1000

// Example 3:
const fn3 = compose([]);
console.log(fn3(42)); // Output: 42
