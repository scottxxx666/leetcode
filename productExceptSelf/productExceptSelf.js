productExceptSelf = function (nums) {
  let hasZero = false;
  let twoZero = false;
  let product = nums.reduce((prev, current) => {
    if (current === 0) {
      if (hasZero) {
        twoZero = true;
      }
      hasZero = true;
      return prev;
    }
    return prev * current;
  }, 1);
  if (twoZero) {
    return nums.map(e => 0);
  }
  return nums.map(e => {
    if (e === 0) {
      return product;
    }
    if (hasZero) {
      return 0;
    }
    return product / e;
  });
};

module.exports = productExceptSelf;
