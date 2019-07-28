module.exports = input => {
  let result = 0
  while (input != 0) {
    if (Math.abs(result) > Math.pow(2, 31) / 10) {
      return 0
    }
    result = result * 10 + input % 10
    input = parseInt(input / 10)
  }
  return result
}