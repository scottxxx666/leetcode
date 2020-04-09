function afterBackspace(s) {
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      temp = temp === 0 ? 0 : temp - 1;
    } else {
      s[temp] = s[i];
      temp++;
    }
  }
  return temp;
}

module.exports = (S, T) => {
  const s = S.split('');
  const t = T.split('');
  let tempS = afterBackspace(s);
  let tempT = afterBackspace(t);
  if (tempS !== tempT) {
    return false;
  }
  for (let i = 0; i < tempT; i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }
  return true;
};
