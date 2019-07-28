module.exports = x => {
  if (x < 0) {
    return false;
  }
  const origin = x;
  let reverted = 0;
  while (x !== 0) {
    reverted += x % 10;
    x = parseInt(x / 10);
    if (x !== 0) {
      reverted = reverted * 10;
    }
  }
  return origin === reverted
}