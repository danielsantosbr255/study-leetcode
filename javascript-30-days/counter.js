/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var createCounter = function (n) {
  return () => n++;
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
