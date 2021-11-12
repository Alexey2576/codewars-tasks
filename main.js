function generateShape(integer){
  let str = ""
  for (let i = 0; i < integer; i++) {
    for (let i = 0; i < integer; i++) {
      str += "+"
    }
    str+="\n"
  }
  return str.substr(0, str.length-1)
}

console.log(generateShape(8))