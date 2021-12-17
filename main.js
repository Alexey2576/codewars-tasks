function abbrevName(name){
  const mass = name.toString().split(" ")
  const str = mass[0].substring(0, 1).toUpperCase() + "." + mass[1].substring(0, 1).toUpperCase()
  return str
}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))