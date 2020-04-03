const maximalSquare = require('./index');

let matrix;

function shouldReturn(expected) {
  expect(maximalSquare(matrix)).toBe(expected);

}

function given(m) {
  matrix = m;
}

test('matrix 1*1 square 1*1', function () {
  given([["1"]]);
  shouldReturn(1);
});

test('matrix 2*2 square 1*1', function () {
  given([
    ["1", "1"],
    ["1", "0"],
  ]);
  shouldReturn(1);
});

test('matrix 2*2 square 2*2', function () {
  given([
    ["1", "1"],
    ["1", "1"],
  ]);
  shouldReturn(4);
});

test('matrix 3*3 square 1*1', function () {
  given([
    ["0", "1", "1"],
    ["1", "1", "0"],
    ["1", "0", "1"],
  ]);
  shouldReturn(1);
});

test('matrix 3*3 square 2*2 right top', function () {
  given([
    ["0", "1", "1"],
    ["1", "1", "1"],
    ["1", "0", "1"],
  ]);
  shouldReturn(4);
});

test('matrix 3*3 square 2*2 right bottom', function () {
  given([
    ["0", "1", "0"],
    ["1", "1", "1"],
    ["0", "1", "1"],
  ]);
  shouldReturn(4);
});

test('matrix 3*3 square 2*2 two', function () {
  given([
    ["0", "1", "1"],
    ["1", "1", "1"],
    ["1", "1", "0"],
  ]);
  shouldReturn(4);
});

test('matrix 4*5 square 2*2', function () {
  given([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ]);
  shouldReturn(4);
});

test('empty matrix', function () {
  given([]);
  shouldReturn(0);
});

test('10*9 matrix 2*2 square', function () {
  given([
    ["1", "0", "1", "0", "0", "1", "1", "1", "0"],
    ["1", "1", "1", "0", "0", "0", "0", "0", "1"],
    ["0", "0", "1", "1", "0", "0", "0", "1", "1"],
    ["0", "1", "1", "0", "0", "1", "0", "0", "1"],
    ["1", "1", "0", "1", "1", "0", "0", "1", "0"],
    ["0", "1", "1", "1", "1", "1", "1", "0", "1"],
    ["1", "0", "1", "1", "1", "0", "0", "1", "0"],
    ["1", "1", "1", "0", "1", "0", "0", "0", "1"],
    ["0", "1", "1", "1", "1", "0", "0", "1", "0"],
    ["1", "0", "0", "1", "1", "1", "0", "0", "0"],
  ]);
  shouldReturn(4);
});

