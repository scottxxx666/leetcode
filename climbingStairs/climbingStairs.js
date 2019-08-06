function calculateN(n) {
  const square5 = Math.sqrt(5);
  return square5 / 5 * (Math.pow((1 + square5) / 2, n) - Math.pow((1 - square5) / 2, n));
}

const climbStairs = function (n) {
  return Math.round(calculateN(n) + calculateN(n - 1));
};

module.exports = climbStairs;