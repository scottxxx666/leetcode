const subsets = require('./subsets');

let result;

function given(m) {
  result = subsets(m);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('0 element', () => {
  given([]);
  shouldBe([[]]);
});

test('1 element', () => {
  given([0]);
  shouldBe([[], [0]]);
});

test('2 diff element', () => {
  given([0, 1]);
  shouldBe([[], [0], [1], [0, 1]]);
});

test('3 diff element', () => {
  given([0, 1, 2]);
  shouldBe([[], [0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2]]);
});

