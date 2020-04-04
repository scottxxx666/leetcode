function dfs(matrix, target, i, j, already) {
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) {
    return false;
  }
  if (already[i][j]) {
    return false;
  }
  if (matrix[i][j] === target) {
    return true;
  }
  already[i][j] = true;
  if (matrix[i][j] < target) {
    return dfs(matrix, target, i + 1, j, already) || dfs(matrix, target, i, j + 1, already);
  } else {
    return dfs(matrix, target, i - 1, j, already) || dfs(matrix, target, i, j - 1, already);
  }
}

module.exports = (matrix, target) => {
  if (matrix.length <= 0) {
    return false;
  }
  const already = [];
  for (let i = 0; i < matrix.length; i++) {
    already.push(new Array(matrix[0].length).fill(false));
  }
  return dfs(matrix, target, 0, 0, already);
};
