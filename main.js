function shortcut (string) {
  let mass = string.toString().split('')
  let newMass = []
  let mass2 = ['a', 'e', 'i', 'o', 'u']
  for (let item in mass) {
    if (!mass2.includes(mass[item]))
      newMass.push(mass[item])
  }
  return newMass.join('')
}

console.log(shortcut('hello'))
console.log(shortcut('how are you today?'))
console.log(shortcut('complain'))
console.log(shortcut('never'))
console.log(shortcut('HELLO'))