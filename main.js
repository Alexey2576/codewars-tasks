function upArray(arr) {
  if (arr.length === 0)
    return null;
  let str = "";
  arr.forEach(el => {
    str += el;
  })

  if (str.includes("-"))
    return null;
  else if (arr.length !== str.length)
    return null;
  else {
    let big = Number.parseInt(str);

    return console.log((big)
      .toString()
      .split("")
      .map(el => parseInt(el)));
  }
}

upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7])
upArray([1, -9])