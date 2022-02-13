function well(x) {
  let i = 0;
  x.forEach(n => n === 'good' && i++)
  if (i > 2) return "I smell a series!"
  if (i > 0 && i <= 2) return "Publish!"
  return "Fail!"
}

console.log(well([`bad`, 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))