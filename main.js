function findUniq(arr) {
  arr.sort((a, b) => {
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    if (a === b)
      return 0
  })
  if (arr[0] === arr[1])
    return arr[arr.length-1]
  else
    return arr[0];
}
