const wallsAndGates = require("./index");

const WALL = -1;
const GATE = 0;
const ROOM = Number.MIN_SAFE_INTEGER;

test('', function () {
  const rooms = [
    [ROOM, WALL, GATE, ROOM],
    [ROOM, ROOM, ROOM, WALL],
    [ROOM, WALL, ROOM, WALL],
    [GATE, WALL, ROOM, ROOM],
  ];
  wallsAndGates(rooms);

  expect(rooms).toStrictEqual([
    [3, -1, 0, 1],
    [2, 2, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4],
  ]);
});

