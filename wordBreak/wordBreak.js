function match(s, word, sIndex) {
  return s.substring(sIndex, sIndex + word.length) === word;
}

function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let word of wordDict) {
      if (word.length <= i && match(s, word, i - word.length) && dp[i - word.length]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[dp.length - 1];
}


module.exports = wordBreak;
