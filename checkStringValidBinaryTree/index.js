const isValidSequence = function (root, arr) {
  const target = arr.shift();
  if (root === null || root.val !== target) {
    return false;
  }
  if (arr.length === 0) {
    return root.left === null && root.right === null;
  }
  return isValidSequence(root.left, [...arr]) || isValidSequence(root.right, [...arr]);
};
