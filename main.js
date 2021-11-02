function stray(numbers) {
  numbers.sort((a, b) => {
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    if (a === b)
      return 0
  })
  if (numbers[0] === numbers[1])
    return numbers[numbers.length-1]
  else
    return numbers[0];
}