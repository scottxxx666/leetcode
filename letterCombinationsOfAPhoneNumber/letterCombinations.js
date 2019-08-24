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
      result = [...chars];
    } else {
      result = result.reduce((prev, each) => {
        return [...prev, ...chars.map(c => each + c)];
      }, []);
    }
  }
  return result;
}

module.exports = letterCombinations;
