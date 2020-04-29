module.exports = function maxPathSum(root) {
  function calculate(pointer) {
    if (pointer === null) {
      return { max: Number.MIN_SAFE_INTEGER, sum: 0 };
    }
    const left = calculate(pointer.left);
    const right = calculate(pointer.right);
    return {
      max: Math.max(
        left.max,
        right.max,
        left.sum + right.sum + pointer.val,
        pointer.val,
        pointer.val + left.sum,
        pointer.val + right.sum,
      ),
      sum: Math.max(left.sum + pointer.val, right.sum + pointer.val, pointer.val),
    };
  }

  return calculate(root).max;
};
