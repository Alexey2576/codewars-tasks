function iqTest(numbers){
  let mass = numbers.split(" ");
  let iOdd = 0;
  let iEven = 0;
  let countOdd = 0;
  let countEven = 0;
  mass.forEach((el, i, mass) => {
    if (parseInt(el) % 2 === 0) {
      iEven = i + 1;
      countEven++;
    } else {
      iOdd = i + 1;
      countOdd++;
    }
  })
  if (countEven === 1)
    return console.log(iEven);
  else if (countOdd === 1)
    return console.log(iOdd);
}

iqTest("2 4 7 8 10");
iqTest("1 2 1 1 1");
