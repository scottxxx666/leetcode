module.exports = function maxPathSum(root) {
  let max = Number.MIN_SAFE_INTEGER;

  function calculate(pointer) {
    if (pointer === null) {
      return 0;
    }
    const left = Math.max(0, calculate(pointer.left));
    const right = Math.max(0, calculate(pointer.right));
    max = Math.max(max, pointer.val + left + right);
    return Math.max(left, right) + pointer.val;
  }

  calculate(root);
  return max;
};
