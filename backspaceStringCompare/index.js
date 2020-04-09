module.exports = (S, T) => {
  let i, j;
  for (i = S.length - 1, j = T.length - 1; i >= 0 || j >= 0; i--, j--) {
    for (let back = 0; i >= 0 && (S[i] === '#' || back); i--) {
      back += S[i] === '#' ? 1 : -1;
    }
    for (let back = 0; j >= 0 && (T[j] === '#' || back); j--) {
      back += T[j] === '#' ? 1 : -1;
    }
    if (i < 0 || j < 0 || S[i] !== T[j]) {
      return i === -1 && j === -1;
    }
  }
  return true;
};
