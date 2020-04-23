module.exports = (target) => {
  function getMap() {
    const map = new Map();
    for (let i = 0; i < 25; i++) {
      map.set(String.fromCharCode(97 + i), [Math.floor(i / 5), i % 5]);
    }
    map.set('z', map.get('u'));
    return map;
  }

  function move(x, y) {
    let result = '';
    while (Math.abs(y) > 0) {
      const direction = y > 0 ? 'D' : 'U';
      result += direction;
      y = y > 0 ? y - 1 : y + 1;
    }
    while (Math.abs(x) > 0) {
      const direction = x > 0 ? 'R' : 'L';
      result += direction;
      x = x > 0 ? x - 1 : x + 1;
    }
    return result;
  }

  const map = getMap();
  let result = '';
  let from = [0, 0];
  let prev;
  for (let i = 0; i < target.length; i++) {
    const each = target[i];
    if (prev === each) {
      result += '!';
      continue;
    }
    if (prev === 'z') {
      result += 'U';
    }

    prev = each;
    const dest = map.get(each);
    const [x, y] = [dest[1] - from[1], dest[0] - from[0]];
    result += move(x, y);
    if (each === 'z') {
      result += 'D';
    }
    result += '!';
    from = dest;
  }
  return result;
};
