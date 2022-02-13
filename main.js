function findNextSquare(sq) {
  let n = Math.sqrt(sq)
  if(Number.isInteger(n) > 0) return Math.pow(n+1, 2)
  return -1;
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(319225))
console.log(findNextSquare(15241383936))
console.log(findNextSquare(155))