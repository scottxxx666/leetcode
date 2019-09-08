function uniquePaths(m, n) {
  if (m < 2 || n < 2) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}

module.exports = uniquePaths;
