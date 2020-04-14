module.exports = (s, shift) => {
  const move = shift.reduce((prev, curr) => {
    const step = curr[0] === 0 ? -curr[1] : curr[1];
    return prev + step;
  }, 0);

  let result = new Array(s.length).fill(null);
  for (let i = 0; i < s.length; i++) {
    result[(((i + move) % s.length) + s.length) % s.length] = s[i];
  }
  return result.join('');
};
