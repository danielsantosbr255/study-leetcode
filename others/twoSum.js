function worse(array, target) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (sum === target) {
        result = [i, j];
      }
    }
  }

  return result;
}

function cool(array, target) {
  const indexedArray = array.map((value, index) => [value, index]);

  indexedArray.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = indexedArray.length - 1;

  while (left < right) {
    const sum = indexedArray[left][0] + indexedArray[right][0];

    if (sum === target) return [indexedArray[left][1], indexedArray[right][1]];
    else if (sum < target) left++;
    else right--;
  }
}

function best(array, target) {
  const hasher = new Map();
  let result = [];

  array.forEach((element, index) => {
    if (hasher.has(element)) result = [hasher.get(element), index];
    else hasher.set(target - element, index);
  });

  return result;
}

const target = 9;
const array = [11, 15, 2, 7];

console.log(worse(array, target));
console.log(cool(array, target));
console.log(best(array, target));
