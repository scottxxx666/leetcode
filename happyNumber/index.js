const isHappy = (n) => {
  let slow = n;
  let fast = n;
  while (true) {
    slow = sum(slow);
    fast = sum(fast);
    fast = sum(fast);
    if (slow === fast) {
      if (slow === 1) {
        return true;
      }
      return false;
    }
  }
};

const sum = (n) => {
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    const digit = temp % 10;
    sum += digit ** 2;
    temp = Math.floor(temp / 10);
  }
  return sum;
};

module.exports = isHappy;
