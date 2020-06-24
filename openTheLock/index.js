function enqueue(t, history, queue) {
  const next = t.join('');
  if (!history.has(next)) {
    queue.push(next);
    history.add(next);
  }
}

const openLock = function (deadends, target) {
  if (deadends.find(e => e === '0000')) {
    return -1;
  }

  let moves = 0;
  const queue = ["0000"];
  const history = new Set([...queue, ...deadends]);
  while (queue.length !== 0) {
    for (let i = queue.length - 1; i >= 0; i--) {
      const temp = queue.shift();
      if (temp === target) {
        return moves;
      }
      for (let j = 0; j < 4; j++) {
        const t = temp.split('').map(e => +e);
        t[j] = (t[j] + 1) % 10;
        enqueue(t, history, queue);

        t[j] = (t[j] + 8) % 10;
        enqueue(t, history, queue);
      }
    }
    moves++;
  }
  return -1;
};

module.exports = openLock;
