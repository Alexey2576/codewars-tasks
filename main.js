function dataReverse(data) {
  let n = data.length/8;
  let mass = [];
  for (let i = 0; i < n; i++) {
    let s = ""
    for (let x = 0; x < 8; x++) {
      s = s + data[x];
    }
    mass.push(s);
    data = data.splice(8);
  }
  mass.reverse();
  let str = "";
  mass.forEach(el => str += el)
  mass = str.split("")
  return console.log(mass.map(el => parseInt(el)))
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
//const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
dataReverse(data1)
const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
// const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
dataReverse(data3)