function longestConsec(strarr, k) {
  if (k > 1 && k <= strarr.length) {
    let mass = [];
    for (let a = 0; a < strarr.length; a++) {
      let string = "";
      for (let i = a; i < k; i++) {
        if (k > strarr.length)
          {
            let c = 0;
            let maxStr = mass[0].length;
            for (let x = 0; x < mass.length; x++) {
              if (maxStr < mass[x].length)
                c = x;
            }
            return console.log(mass[c]);
          }
        else
          string = string.concat(strarr[i]);
      }
      k++;
      mass.push(string);
    }
  }
  else if (k === 1)
    {
      let maxStr = strarr[0];
      for (let x = 0; x < strarr.length; x++) {
        if (maxStr.length < strarr[x].length)
          maxStr = strarr[x];
      }
      return console.log(maxStr);
    }
  else
    return "";
}


longestConsec(["zoneeeeeeeeeee", "abigail", "theta", "form", "libe", "zasssssss"], 6)