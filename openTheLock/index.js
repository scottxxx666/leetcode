function isValid(wrong, next, history) {
  return !wrong.has(next) && !history.has(next);
}

const openLock = function (deadends, target) {
  let moves = 0;
  const queue = ["0000"];
  const history = new Set(queue);
  const wrong = new Set(deadends);
  while (queue.length !== 0) {
    for (let i = queue.length - 1; i >= 0; i--) {
      const temp = queue.shift();
      if (temp === target) {
        return moves;
      }
      history.add(temp);
      for (let j = 0; j < 4; j++) {
        const t = temp.split('').map(e => +e);
        t[j] = (t[j] + 1) % 10;
        const prev = t.join('');
        if (!wrong.has(prev) && !history.has(prev)) {
          queue.push(prev);
        }

        t[j] = (t[j] + 8) % 10;
        const next = t.join('');
        if (isValid(wrong, next, history)) {
          queue.push(next);
        }
      }
    }
    moves++;
  }
  return -1;
};

module.exports = openLock;
