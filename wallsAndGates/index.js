function isValid(rooms, i, j) {
  return i >= 0 && j >= 0 && i < rooms.length && j < rooms[0].length && rooms[i][j] === ROOM;
}

function update(rooms, i, j, queue) {
  if (isValid(rooms, i, j)) {
    queue.push([i, j]);
  }
}

const WALL = -1;
const GATE = 0;
const ROOM = Number.MIN_SAFE_INTEGER;

module.exports = (rooms) => {
  const queue = [];

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  let steps = 0;
  while (queue.length !== 0) {
    for (let i = queue.length - 1; i >= 0; i--) {
      const [i, j] = queue.shift();
      if (rooms[i][j] === ROOM) {
        rooms[i][j] = steps;
      }

      update(rooms, i - 1, j, queue);
      update(rooms, i + 1, j, queue);
      update(rooms, i, j - 1, queue);
      update(rooms, i, j + 1, queue);
    }
    steps++;
  }
};
