function findMax(root) {
  if (root === null) {
    return {
      maxDiameter: 0,
      maxHeight: 0,
    };
  }
  const left = findMax(root.left);
  const right = findMax(root.right);
  return {
    maxDiameter: Math.max(left.maxDiameter, right.maxDiameter, left.maxHeight + right.maxHeight),
    maxHeight: Math.max(left.maxHeight, right.maxHeight) + 1,
  };
}

module.exports = (root) => {
  return findMax(root).maxDiameter;
};
