const rps = (p1, p2) => {
  let mass = ['rock', 'scissors', 'paper']
  let player1 = mass.indexOf(p1)
  let player2 = mass.indexOf(p2)
  if (player1 - player2 === -1)
    return "Player 1 won!"
  if (player1 - player2 === 1)
    return "Player 2 won!"
  if (player1 - player2 === 2)
    return "Player 1 won!"
  if (player1 - player2 === -2)
    return "Player 2 won!"
  if (player1 === player2)
    return "Draw!"
};

console.log(rps('scissors','paper'))
console.log(rps('scissors','rock'))
console.log(rps('paper','paper'))