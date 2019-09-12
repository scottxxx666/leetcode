function match(s, word, sIndex) {
  return s.substring(sIndex, sIndex + word.length).includes(word);
}

function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length; i++) {
    for (let word of wordDict) {
      if (match(s, word, i) && dp[i]) {
        dp[i + word.length] = true;
      }
    }
  }
  return dp[dp.length - 1];
}


module.exports = wordBreak;
