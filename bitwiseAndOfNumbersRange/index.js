module.exports = function rangeBitwiseAnd(m, n) {
  let result = 0;
  if (m === 0) {
    return 0;
  }
  const low = Math.floor(Math.log2(m));
  const high = Math.floor(Math.log2(n));
  if (low !== high) {
    return 0;
  }
  if (low === 0) {
    return m;
  }
  const exclude = 2 ** low;
  result += exclude + rangeBitwiseAnd(m - exclude, n - exclude);
  return result;
};
