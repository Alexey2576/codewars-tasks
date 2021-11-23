function correct(string)
{
  let s = ""
  let mass = string.toString().split("")
  return mass.map(t => t === "0" ? t = "O" : t === "5" ? t = "S" : t === "1" ? t = "I" : t).join("")
}
console.log(correct("L0ND0N"))