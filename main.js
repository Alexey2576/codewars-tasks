function sumTwoSmallestNumbers(numbers) {
  compare = (a, b) => {
    if (a < b)
      return -1
    if (a === b)
      return 0;
    if (a > b)
      return 1;
  }
  numbers.sort(compare);
  return console.log(`Sum should be ${numbers[0] + numbers[1]}`)
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])
sumTwoSmallestNumbers([15, 28, 4, 2, 43])