function expandedForm(num) {
  let str = num.toString().split("");
  let length = str.length;
  let sum = "";
  str.forEach(el => {
    if (el !== "0") {
      sum = sum + ` + ${el * Math.pow(10, length-1)}`;
    }
    length--;
  })
  return sum.substr(3);
}

expandedForm(12);
expandedForm(42);
expandedForm(70304);