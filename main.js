function removeSmallest(numbers) {
  let minEl = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (minEl > numbers[i])
      minEl = numbers[i];
  }
  let newArr = numbers.slice(0);
  newArr.splice(newArr.indexOf(minEl), 1);
  return console.log(newArr);
}

removeSmallest([1, 2, 3, 4, 5]);
removeSmallest([5, 3, 2, 1, 4]);
removeSmallest([5, 1, 2, 1, 4]);
removeSmallest([2, 2, 1, 2, 1]);
removeSmallest([]);