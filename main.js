function arrayDiff(a, b) {
  let newMass = []
  for (let i = 0; i < a.length; i++) {
    let idx = b.indexOf(a[i])
    idx < 0 && newMass.push(a[i])
  }
  return newMass
}

console.log(arrayDiff([], [4,5]))
console.log(arrayDiff([3,4], [3]))
console.log(arrayDiff([1,8,2], []))
console.log(arrayDiff([1,2,3], [1,2]))
