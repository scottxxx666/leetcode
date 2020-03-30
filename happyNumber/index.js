const isHappy = (n) => {
  const set = new Set();
  return isHappyEver(set, n);
};

function isHappyEver(set, n) {
  if (n === 1) {
    return true;
  }
  if (set.has(n)) {
    return false;
  }
  set.add(n);
  return isHappyEver(set, sum(n));
}

function sum(n) {
  let temp = n;
  let sum = 0;
  while (temp >= 10) {
    const each = temp % 10;
    sum += each ** 2;
    temp = Math.floor(temp / 10);
  }
  sum += temp ** 2;
  return sum;
}

module.exports = isHappy;
