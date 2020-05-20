module.exports = (root, k) => {
  let weight = 0;
  let result;

  function find(r) {
    if (!r) {
      return 0;
    }
    find(r.left);
    weight += 1;
    if (!result && weight === k) {
      result = r.val;
    }
    return weight + find(r.right);
  }

  find(root);
  return result;
};
