function longestConsec(strarr, k) {
  if (k > 1 && k <= strarr.length) {
    let mass = [];
    for (let a = 0; a < strarr.length; a++) {
      let string = "";
      for (let i = a; i < k; i++) {
        if (k > strarr.length)
          {
            let maxStr = mass[0];
            for (let x = 0; x < mass.length; x++) {
              if (maxStr.length < mass[x].length)
                maxStr = mass[x];
            }
            return console.log(maxStr);
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


longestConsec(["zone", "abigail", "thetaaaaaaaaa", "formm", "libennnnn", "zass"], 2)