module.exports = s => {
  const intMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
  };
  s = s.replace('IV', 'IIII').replace('IX', 'IIIIV');
  s = s.replace('XL', 'XXXX').replace('XC', 'XXXXL');
  s = s.replace('CD', 'CCCC').replace('CM', 'CCCCD');
  return s.split('').reduce((a, b) => a + intMap[b], 0);
};