module.exports = x => {
  // Ending zero is not palindrome except it's zero
  if (x < 0 || (x % 10 === 0 && x > 0)) {
    return false;
  }
  let reverted = 0;
  // only revert half of the number
  while (x > reverted) {
    reverted = reverted * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return x === reverted || x === parseInt(reverted / 10)
}