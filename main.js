function balance(left,right){
  let leftArr = left.toString().split("");
  let rightArr = right.toString().split("");

  let l = 0;
  let r = 0;
  for (let i = 0; i < leftArr.length; i++) {
      leftArr[i] === "!" ? l +=2 : l+=3
  }
  for (let i = 0; i < rightArr.length; i++) {
    rightArr[i] === "!" ? r += 2 : r += 3
  }
  if (l === r)
    return "Balance"
  if (l > r)
    return "Left"
  if (r > l)
    return "Right"
}