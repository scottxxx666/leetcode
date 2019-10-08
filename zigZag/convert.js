convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let result = '';
  const maxInterval = (numRows - 1) * 2;
  for (let i = 0; i < numRows; i++) {
    let interval = maxInterval - i * 2 || maxInterval;
    let j = 0;
    while ((i + j) < s.length) {
      result += s.charAt(i + j);
      j += interval;
      interval = maxInterval - interval || maxInterval;
    }
  }
  return result;
};

module.exports = convert;
