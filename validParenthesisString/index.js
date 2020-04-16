module.exports = (s) => {
  let max = 0;
  let min = 0;
  for (let each of s) {
    if (each === '(') {
      max++;
      min++;
    } else if (each === ')') {
      max--;
      min--;
    } else {
      max++;
      min--;
    }
    if (max < 0) {
      return false;
    }
    min = Math.max(min, 0);
  }
  return min <= 0;
};
