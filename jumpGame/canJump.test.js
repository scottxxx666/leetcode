const canJump = require('./canJump');

let result;

function given(matrix) {
  result = canJump(matrix);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1 element always true', () => {
  given([0]);
  shouldBe(true);
});

test('start from 0', () => {
  given([0, 0]);
  shouldBe(false);
});

test('all greater than 0', () => {
  given([1, 0]);
  shouldBe(true);
});

test('all greater than 0', () => {
  given([1, 0]);
  shouldBe(true);
});

test('can not jump over 0 in mid', () => {
  given([1, 0, 0]);
  shouldBe(false);
});

test('can jump over 0 in mid', () => {
  given([2, 0, 0]);
  shouldBe(true);
});

