function validatePIN (pin) {
  const regex = /^\d+$/
  if (pin.length === 4 || pin.length === 6)
    return regex.test(pin)
  return false
}

console.log(validatePIN("1230"))