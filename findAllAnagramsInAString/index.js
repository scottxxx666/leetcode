module.exports = (s, p) => {
  const chars = new Array(26).fill(0);
  for (let c of p) {
    chars[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const result = [];
  let candidates = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    let temp = [];
    const key = c.charCodeAt(0) - 'a'.charCodeAt(0);
    for (let candidate of candidates) {
      if (candidate[key] > 0) {
        candidate[key]--;
        if (candidate.every(e => e === 0)) {
          result.push(i - p.length + 1);
        } else {
          temp.push(candidate);
        }
      }
    }
    const newCandidate = [...chars];
    if (newCandidate[key] > 0) {
      newCandidate[key]--;
      if (newCandidate.every(e => e === 0)) {
        result.push(i);
      } else {
        temp.push(newCandidate);
      }
    }
    candidates = temp;
  }
  return result;
};
