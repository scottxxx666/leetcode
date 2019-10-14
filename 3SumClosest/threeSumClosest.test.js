const threeSumClosest = require('./threeSumClosest');

let result;

function given(a, b) {
  result = threeSumClosest(a, b);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('only 1 solution', () => {
  given([0, 0, 0], 0);
  shouldBe(0);
});

test('sum equals to target', () => {
  given([0, 0, 0, 1], 1);
  shouldBe(1);
});

test('closest solution (smaller)', () => {
  given([0, 0, 0, 1], -1);
  shouldBe(0);
});

test('closest solution (larger)', () => {
  given([0, 0, 0, 1], 2);
  shouldBe(1);
});

test('closest solution (smaller and shuffle)', () => {
  given([0, 2, 1, -3], 1);
  shouldBe(0);
});

