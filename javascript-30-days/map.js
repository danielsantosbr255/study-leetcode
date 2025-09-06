/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const returnedArray = [];
  for (let index = 0; index < arr.length; index++) {
    returnedArray[index] = fn(arr[index], index);
  }
  return returnedArray;
};

const arr = [1, 2, 3];

const plusOne = (n) => n + 1;
const plusI = (n, i) => n + i;
const constant = () => 42;

console.log(map(arr, plusOne));
console.log(map(arr, plusI));
console.log(map(arr, constant));
