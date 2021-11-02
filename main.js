function isPangram(string){
  return console.log(new Set(string
    .toLowerCase()
    .replace(/[^a-z]/g, '')
  ).size === 26)
}

isPangram("The quick brown fox jumps over the lazy dog.")
isPangram("This is not a pangram.")