const cannonsReady = (gunners) => {
  for (let item in gunners) {
    if (gunners[item] === 'nay')
      return 'Shiver me timbers!'
  }
  return 'Fire!'
}

const a = {'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye'},
  b = {'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye'};

console.log(cannonsReady(a))
console.log(cannonsReady(b))
