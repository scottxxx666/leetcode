module.exports = (num, k) => {
  const stack = [];
  let count = 0;
  for (let j = 0; j < num.length; j++) {
    while (count < k && stack.length > 0 && stack[stack.length - 1] > num[j]) {
      stack.pop();
      count++;
    }
    stack.push(num[j]);
  }

  let result = stack.splice(0, num.length - k).join('');
  let i = 0;
  while (result[i] === '0') {
    result = result.replace('0', '');
  }
  return result === '' ? '0' : result;
};
