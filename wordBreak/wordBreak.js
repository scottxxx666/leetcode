function match(s, word, sIndex) {
  return s.substring(sIndex, sIndex + word.length).includes(word);
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
