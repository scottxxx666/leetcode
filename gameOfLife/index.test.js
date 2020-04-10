const gameOfLife = require("./index");

let result;

function given(board) {
  result = board;
}

function shouldBe(expected) {
  gameOfLife(result);
  expect(result).toStrictEqual(expected);
}

test('1 live cell', function () {
  given([[1]]);
  shouldBe([[0]]);
});

test('1 dead cell', function () {
  given([[0]]);
  shouldBe([[0]]);
});

test('fewer than two live neighbors dies', function () {
  given([
    [0, 1, 0],
  ]);
  shouldBe([[0, 0, 0]]);
});

test('two or three live neighbors lives on to the next generation', function () {
  given([
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ]);
  shouldBe([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]);
});

test('more than three live neighbors dies', function () {
  given([
    [1, 1, 1],
    [0, 1, 1],
  ]);
  shouldBe([
    [1, 0, 1],
    [1, 0, 1],
  ]);
});

test('dead cell with exactly three live neighbors becomes a live cell', function () {
  given([
    [0, 1, 1],
    [0, 1, 0],
  ]);
  shouldBe([
    [0, 1, 1],
    [0, 1, 1],
  ]);
});

test('difficult', function () {
  given([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ]);
  shouldBe([
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ]);
});

