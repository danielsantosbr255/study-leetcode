function bubbleSort(originalArray) {
  const array = [...originalArray];

  for (let i = 0; i < array.length; i++) {
    let swapped = false;

    for (let j = 0; j < array.length; j++) {
      const current = array[j];
      const next = array[j + 1];

      if (current > next) {
        [array[j + 1], array[j]] = [current, next];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return array;
}

const sorted = bubbleSort([3, 5, 2, 1, 4]);
console.log(sorted);
