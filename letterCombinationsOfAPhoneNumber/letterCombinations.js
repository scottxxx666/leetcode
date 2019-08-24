function letterCombinations(digits) {
  const lookup = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  let result = [];
  for (let i = 0; i < digits.length; i++) {
    const chars = lookup[digits[i]];
    if (result.length === 0) {
      chars.forEach(c => result.push(c));
    } else {
      let newResult = [];
      result.forEach(each => {
        chars.forEach(c => {
          newResult.push(each + c);
        });
      });
      result = newResult;
    }
  }
  return result;
}

module.exports = letterCombinations;
