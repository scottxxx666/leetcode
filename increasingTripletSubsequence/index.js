module.exports = (nums) => {
  let small = Number.MAX_SAFE_INTEGER;
  let big = Number.MAX_SAFE_INTEGER;
  for (let n of nums) {
    if (n <= small) {
      small = n;
    } else if (n <= big) {
      big = n;
    } else {
      return true;
    }
  }
  return false;
};
