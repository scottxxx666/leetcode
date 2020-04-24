module.exports = (target) => {
  function getMap() {
    const map = new Map();
    for (let i = 0; i < 26; i++) {
      map.set(String.fromCharCode(97 + i), [Math.floor(i / 5), i % 5]);
    }
    return map;
  }

  function move(x, y) {
    function moveOneWay(way, steps) {
      let append = '';
      const directions = { 'y': ['D', 'U'], 'x': ['R', 'L'] };
      const direction = steps > 0 ? directions[way][0] : directions[way][1];
      append += direction.repeat(Math.abs(steps));
      return append;
    }

    let append = '';
    append += moveOneWay('x', x);
    append += moveOneWay('y', y);
    const priority = { 'D': 2, 'L': 1, 'U': 1, 'R': 2 };
    result += append.split('').sort((a, b) => priority[a] - priority[b]).join('');
  }

  const map = getMap();
  let result = '';
  let from = [0, 0];
  for (let i = 0; i < target.length; i++) {
    const each = target[i];
    const dest = map.get(each);
    move(dest[1] - from[1], dest[0] - from[0]);
    result += '!';
    from = dest;
  }
  return result;
};
