function childrenNum(root, k, result) {
  if (root === null || result.found) {
    return 0;
  }
  let count = 0;
  count += childrenNum(root.left, k, result);
  if (result.found) {
    return 0;
  }
  if (count + 1 === k) {
    result.found = true;
    result.val = root.val;
    return 0;
  }
  count += childrenNum(root.right, k - count - 1, result);
  return count + 1;
}

module.exports = (root, k) => {
  const result = { found: false, val: null };
  childrenNum(root, k, result);
  return result.val;
};
