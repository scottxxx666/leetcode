module.exports = function rangeBitwiseAnd(m, n) {
  return m === n ? m : rangeBitwiseAnd(m >> 1, n >> 1) << 1;
};
