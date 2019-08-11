module.exports = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let existBefore = new Set();
    for (let j = i; j < s.length; j++) {
      const each = s[j];
      if (!existBefore.has(each)) {
        existBefore.add(each);
      } else {
        existBefore = new Set([each]);
      }
      if (existBefore.size > result) {
        result = existBefore.size;
      }
    }
  }
  return result;
};
