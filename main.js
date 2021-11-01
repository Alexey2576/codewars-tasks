function squareDigits(num){
  let newNum = "";
  let mass = num.toString().split("");
  let newMass = mass.map((el) => Math.pow(parseInt(el),2))
  newMass.forEach((item, newMass) => {
    newNum = newNum.concat(item);
  })
  console.log(parseInt(newNum));
}

squareDigits(9112);