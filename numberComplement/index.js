const findComplement = (num) => {
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return 0;
  }
  return (findComplement(num >> 1) << 1) + findComplement(num % 2);
};

module.exports = findComplement;
