function calculateN(n) {
  let last = 0;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    const temp = result;
    result += last;
    last = temp;
  }
  return result;
}

const climbStairs = function (n) {
  return calculateN(n);
};

module.exports = climbStairs;