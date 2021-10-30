function accum(s) {
  let str = s.toLowerCase().split("");
  let i = 0;
  let newStr = "";
  str.forEach((el) => {
    i++;
    newStr = newStr + "-";
    for (let a = 0; a < i; a++) {
      if (a === 0)
        newStr += el.toUpperCase();
      else
        newStr += el.toLowerCase();
    }
  })
  return console.log(newStr.substr(1))
}

accum("ZpglnRxqenU");