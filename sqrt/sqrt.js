module.exports = function (x) {
  let result = 0;
  while (result ** 2 <= x) {
    result++;
  }
  return result - 1;
};

