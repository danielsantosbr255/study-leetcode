/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = init;

  nums.forEach((element) => {
    val = fn(val, element);
  });
  return val;
};

const nums = [1, 2, 3, 4];

const fn1 = (accum, curr) => accum + curr;
const fn2 = (accum, curr) => accum + curr * curr;
const fn3 = (accum, curr) => 0;

console.log(reduce(nums, fn1, 0));
console.log(reduce(nums, fn2, 100));
console.log(reduce([], fn3, 25));
