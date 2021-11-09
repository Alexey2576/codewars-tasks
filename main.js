function positiveSum(arr) {
  let sum = 0;
  if (arr.length !== 0) {
    arr.forEach(el => {
      if (el > 0)
        sum+=el;
    })
    return sum;
  }
  else return 0;
}

console.log(positiveSum([1,2,3,4,5]))