const fourSum = require('./fourSum');

let result;

function given(a, b) {
  result = fourSum(a, b);
}

function shouldBe(value) {
  expect(result.sort()).toEqual(value.sort());
}

test('4 element', () => {
  given([-1, 0, 1, 2], 2);
  shouldBe([
    [-1, 0, 1, 2]
  ]);
});

test('5 element 1 solution (end)', () => {
  given([-2, -1, 0, 1, 2], 2);
  shouldBe([
    [-1, 0, 1, 2]
  ]);
});

test('5 element 1 solution (front)', () => {
  given([-2, -1, 0, 1, 2], -2);
  shouldBe([
    [-2, -1, 0, 1]
  ]);
});

test('no duplicate solution', () => {
  given([-1, -1, 0, 0, 0, 1, 1], 0);
  shouldBe([
    [-1, 0, 0, 1],
    [-1, -1, 1, 1],
  ]);
});

