function XO(str) {
  let o = 0;
  let x = 0;
  str.split("").forEach(el => {
    if(el.toLowerCase() === "o")
      o++;
    else if (el.toLowerCase() === "x")
      x++;
  })

  if (!str.includes("x") && !str.includes("o"))
    return true;
  else return o === x;
}

