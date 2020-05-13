module.exports = (num, k) => {
  const stack = [];
  let j = 0;
  let count = 0;
  while (j < num.length) {
    if (count < k && stack.length > 0 && stack[stack.length - 1] > num[j]) {
      stack.pop();
      count++;
    } else {
      stack.push(num[j++]);
    }
  }

  while (count < k) {
    stack.pop();
    count++;
  }

  let result = stack.join('');
  let i = 0;
  while (result[i] === '0') {
    result = result.replace('0', '');
  }
  return result === '' ? '0' : result;
};
