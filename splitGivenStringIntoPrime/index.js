/**

 Find out one prime number combinations of a given number string.  For example, given string “11372”, possible prime number combinations can be:
 [11, 3, 7, 2], [113, 7, 2], or [11, 37, 2]


 */

function prime(str) {
  const result = [];
  const dp = new Array(str.length + 1);
  findPrimes(str, result, dp);
  return result;
}

function findPrimes(str, result, dp) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const target = +str.substring(i, j);
      if (!isPrime(target)) {
        continue;
      }
      result.push(target);
      if (j === str.length) {
        return true;
      }
      const r = findPrimes(str.substring(j, str.length), result);
      if (r) {
        return true;
      }
      result.pop();
    }
  }
  return false;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
