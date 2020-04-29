module.exports = function maxPathSum(root) {
  let max = Number.MIN_SAFE_INTEGER;

  function calculate(pointer) {
    if (pointer === null) {
      return 0;
    }
    const left = calculate(pointer.left);
    const right = calculate(pointer.right);

    const val = pointer.val;
    const sum = Math.max(val + left, val + right, val);
    max = Math.max(max, sum, val + left + right);
    return sum;
  }

  calculate(root);
  return max;
};
