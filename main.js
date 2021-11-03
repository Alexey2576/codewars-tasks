function tribonacci(signature,n){
  let sum = 0;
  if (n === 0)
    return console.log([]);
  else if (n < 3) {
    let mass = [];
    for (let i = 0; i < n; i++) {
      mass.push(signature[i]);
    }
    return console.log(mass);
  }
  else {
    for (let i = 2; i < (n-1); i++) {
      sum = signature[i] + signature[i-1] + signature[i-2];
      signature.push(sum);
    }
    return console.log(signature);
  }
}
tribonacci([1,1,1],1);
tribonacci([0, 0, 0],10);
// tribonacci([1,1,1],10);
// tribonacci([0.5,0.5,0.5],30)
