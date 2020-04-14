module.exports = (s, shift) => {
  const move = shift.reduce((prev, curr) => {
    const step = curr[0] === 0 ? -curr[1] : curr[1];
    return prev + step;
  }, 0);
  const steps = move % s.length;
  return s.slice(-steps, s.length) + s.slice(0, -steps);
};
