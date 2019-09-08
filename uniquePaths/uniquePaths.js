function uniquePaths(m, n) {
  let right = m - 1;
  let down = n - 1;
  let result = 1;
  for (let i = 1; i <= down; i++) {
    result = result * (right + i) / i;
  }
  return result;
}

module.exports = uniquePaths;
