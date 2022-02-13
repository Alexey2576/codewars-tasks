function find_average(array) {
  let sum = array.reduce(function (sum, current) {
    return sum + current
  }, 0)
  return array.length !== 0 ? sum / array.length : 0
}