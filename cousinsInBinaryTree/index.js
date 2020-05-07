const isCousins = function (root, x, y) {
  const a = root.val === x ? { depth: -1, val: null } : parent(root, x, 0);
  const b = root.val === y ? { depth: -1, val: null } : parent(root, y, 0);
  return a.val !== b.val && a.depth === b.depth;
};

function parent(root, x, depth) {
  let left, right;
  if (root === null) {
    return null;
  }
  if (root.left) {
    if (root.left.val === x) {
      return { depth: depth, val: root.val };
    }
    left = parent(root.left, x, depth + 1);
  }
  if (root.right) {
    if (root.right.val === x) {
      return { depth: depth, val: root.val };
    }
    right = parent(root.right, x, depth + 1);
  }
  return left || right;
}

module.exports = isCousins;
