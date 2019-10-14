const threeSum = require('./threeSum');

let result;

function given(a) {
  result = threeSum(a);
}

function shouldBe(value) {
  expect(result.sort()).toEqual(value.sort());
}

test('3 elements', () => {
  given([0, 0, 0]);
  shouldBe([
    [0, 0, 0]
  ]);
});

test('4 elements 1 solution', () => {
  given([1, 0, 0, 0]);
  shouldBe([
    [0, 0, 0]
  ]);
});

test('4 elements 2 solution', () => {
  given([-1, -1, 0, 1, 2]);
  shouldBe([
    [-1, 0, 1],
    [-1, -1, 2],
  ]);
});

test('5 elements 2 solution', () => {
  given([-2, 0, 1, 1, 2]);
  shouldBe([
    [-2, 0, 2],
    [-2, 1, 1],
  ]);
});

test('solution no duplicate (duplicate max)', () => {
  given([0, -1, 1, 1]);
  shouldBe([
    [-1, 0, 1]
  ]);
});

test('solution no duplicate (duplicate min)', () => {
  given([-1, 0, -1, 1, 1]);
  shouldBe([
    [-1, 0, 1]
  ]);
});

test('2 duplicate solution', () => {
  given([-2, 0, 0, 2, 2]);
  shouldBe([
    [-2, 0, 2]
  ]);
});

