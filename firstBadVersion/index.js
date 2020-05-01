module.exports = (isBadVersion) => {
  return function (n) {
    let start = 1;
    let end = n;
    while (start < end) {
      let i = Math.floor((start + end) / 2);
      if (isBadVersion(i)) {
        end = i;
      } else {
        start = i + 1;
      }
    }
    return start;
  };
};
