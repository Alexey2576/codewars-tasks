function countSheeps(arrayOfSheep) {
  let i = 0;
  arrayOfSheep.forEach(t => t && i++)
  return i
}