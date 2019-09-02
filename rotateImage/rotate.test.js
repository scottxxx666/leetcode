const rotate = require('./rotate');

let result;

function given(matrix) {
  result = rotate(matrix);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1 element', () => {
  given([1]);
  shouldBe([1]);
});

test('2 element', () => {
  given([
    [1, 2],
    [3, 4]
  ]);
  shouldBe([
    [3, 1],
    [4, 2]
  ]);
});

test('3 element', () => {
  given([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
  shouldBe([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]);
});

