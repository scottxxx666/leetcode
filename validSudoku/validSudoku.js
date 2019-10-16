module.exports = function (board) {
  const allNums = { '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true };
  for (let i = 0; i < board.length; i++) {
    const nums = { ...allNums };
    for (let j = 0; j < board[i].length; j++) {
      const target = board[i][j];
      if (target === '.') {
        continue;
      }
      if (!nums.hasOwnProperty(target)) {
        return false;
      }
      delete nums[target];
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    const nums = { ...allNums };
    for (let j = 0; j < board.length; j++) {
      const target = board[j][i];
      if (target === '.') {
        continue;
      }
      if (!nums.hasOwnProperty(target)) {
        return false;
      }
      delete nums[target];
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const nums = { ...allNums };
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const target = board[3 * i + k][3 * j + l];
          if (target === '.') {
            continue;
          }
          if (!nums.hasOwnProperty(target)) {
            return false;
          }
          delete nums[target];
        }
      }
    }
  }
  return true;
};

