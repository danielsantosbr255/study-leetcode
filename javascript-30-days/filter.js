/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArr = [];

  arr.forEach((element, index) => {
    fn(element, index) && filteredArr.push(element);
  });
  return filteredArr;
};

const arr = [0, 10, 20, 30];
const greaterThan10 = (n) => n > 10;

console.log(filter(arr, greaterThan10));
