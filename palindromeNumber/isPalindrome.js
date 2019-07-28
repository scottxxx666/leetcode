module.exports = x => {
  if (x < 0) {
    return false;
  }
  let digits = 0;
  let y = x;
  while (x != 0) {
    digits += 1;
    x = parseInt(x / 10);
  }
  for (let i = 0; i < (digits / 2); i = i + 1) {
    const a = y % 10;
    const b = parseInt(y / Math.pow(10, digits - 2 * i - 1)) % 10;
    y = parseInt(y / 10)
    if (a !== b) {
      return false;
    }
  }
  return true
}