const climbStairs = function (n) {
  let last = 0;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result += last;
    last = result - last;
  }
  return result;
};

module.exports = climbStairs;