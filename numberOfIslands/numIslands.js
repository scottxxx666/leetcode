function mark(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== '1') {
    return;
  }
  grid[i][j] = '0';
  mark(grid, i - 1, j);
  mark(grid, i + 1, j);
  mark(grid, i, j - 1);
  mark(grid, i, j + 1);
}

numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        mark(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

module.exports = numIslands;
