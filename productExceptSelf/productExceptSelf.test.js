const inumIslands = require('./productExceptSelf');

let result;

function given(a) {
  result = productExceptSelf(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('2 element', () => {
  given([1, 2]);
  shouldBe([2, 1]);
});

test('3 element', () => {
  given([1, 2, 3]);
  shouldBe([6, 3, 2]);
});

test('contain 0', () => {
  given([0, 1]);
  shouldBe([1, 0]);
});

test('2 element all 0', () => {
  given([0, 0]);
  shouldBe([0, 0]);
});

