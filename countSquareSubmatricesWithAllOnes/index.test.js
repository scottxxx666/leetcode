const countSquares = require("./index");

let result;

function given(matrix) {
  result = countSquares(matrix);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('fake square lack 1', function () {
  given([
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 1],
  ]);
  shouldBe(11);
});

