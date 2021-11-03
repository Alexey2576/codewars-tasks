function dashatize(num) {
  let str = "";
  let mass = num.toString().split("");
  mass.forEach(el => {
    if ((parseInt(el) % 2) > 0) {
      if (str.substr(str.length-1, 1) === "-")
        str = str + el + "-";
      else
        str = str + "-" + el + "-";
    }
    else
      str = str + el;
  })
  if (str.substr(0, 1) === "-") {
    str = str.substr(1, str.length-1);
  }
  if (str.substr(str.length-1, 1) === "-") {
    str = str.substr(0, str.length-1);
  }
  return console.log(str)
}

dashatize(274)
dashatize(5311)
dashatize(-5311)
dashatize(NaN)
dashatize(-86320)
dashatize(0)
dashatize(-1 )
