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

test('solution no duplicate', () => {
  given([0, -1, 1, 1]);
  shouldBe([
    [-1, 0, 1]
  ]);
});

