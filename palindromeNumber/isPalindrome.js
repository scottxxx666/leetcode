module.exports = x => {
  if (x < 0) {
    return false;
  }
  let input = x.toString();
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - i - 1]) {
      return false;
    }
  }
  return true
}