module.exports = function rangeBitwiseAnd(m, n) {
  if (m === 0) {
    return 0;
  }
  let bitMove = 1;
  while (m !== n) {
    m >>= 1;
    n >>= 1;
    bitMove <<= 1;
  }
  return m * bitMove;
};
