function twoSum(numbers, target) {
  for (let x = 0; x < numbers.length; x++) {
    for (let y = 1; y < numbers.length; y++ ) {
      if (x !== y) {
        if ((numbers[x] + numbers[y]) === target) {
          return console.log([x, y]);
        }
      }
    }
  }
}

twoSum([1,2,3], 4);
twoSum([3,2,4], 6);