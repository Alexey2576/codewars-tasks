function high(x){
  let ab = "abcdefghijklmnopqrstuvwxyz".split("");
  let mass = x.split(" ");
  let newMass = mass.map(el => {
    let massEl = el.split("");
    let a = 0;
    massEl.forEach(x => {
      a += (ab.indexOf(x) + 1);
    })
    return a;
  })

  let maxEl = newMass[0];
  for (let i = 0; i < newMass.length; i++) {
    if (maxEl < newMass[i])
      maxEl = newMass[i]
  }
  return mass[newMass.indexOf(maxEl)]
}

high('man i need a taxi up to ubud taxi');
