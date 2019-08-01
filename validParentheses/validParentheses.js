module.exports = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  let stack = [];
  const map = {')': '(', '}': '{', ']': '['};
  for (let each of s) {
    if ([')', '}', ']'].includes(each)) {
      if (stack.pop() !== map[each]) {
        return false;
      }
    } else {
      stack.push(each)
    }
  }
  return stack.length === 0;
};
