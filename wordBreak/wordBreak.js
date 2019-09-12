function match(s, word, sIndex) {
  if (s.length - sIndex < word.length) {
    return false;
  }
  for (let i = 0; i < word.length; i++) {
    if (s[sIndex + i] !== word[i]) {
      return false;
    }
  }
  return true;
}

function wordBreak(s, wordDict, sIndex = 0) {
  let result = false;
  if (sIndex === s.length) {
    return true;
  }
  for (let word of wordDict) {
    if (match(s, word, sIndex)) {
      result = result || wordBreak(s, wordDict, sIndex + word.length);
    }
  }
  return result;
}


module.exports = wordBreak;
