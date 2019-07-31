module.exports = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  return strs.reduce((prev, str) => {
    for (let i = 0; i < prev.length; i++) {
      if (prev[i] !== str[i]) {
        return prev.slice(0, i);
      }
      if (i === prev.length - 1) {
        return prev
      }
    }
    return '';
  });
}