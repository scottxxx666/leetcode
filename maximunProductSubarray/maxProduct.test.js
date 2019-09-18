const maxProduct = require('./maxProduct');

let result;

function given(a) {
  result = maxProduct(a);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('1 integer', () => {
  given([1]);
  shouldBe(1);
});

test('2 positive integer', () => {
  given([1, 2]);
  shouldBe(2);
});

test('3 positive integer', () => {
  given([1, 2, 3]);
  shouldBe(6);
});

test('1 positive and 1 negative integer', () => {
  given([1, -1]);
  shouldBe(1);
});

test('3 integer (1 negative at start)', () => {
  given([-1, 2, 3]);
  shouldBe(6);
});

test('3 integer (1 negative at mid)', () => {
  given([1, -2, 3]);
  shouldBe(3);
});

test('3 integer (1 negative at end)', () => {
  given([1, 2, -3]);
  shouldBe(2);
});

test('3 integer (2 negative at mid)', () => {
  given([-2, 3, -4]);
  shouldBe(24);
});

test('4 integer (all negative)', () => {
  given([-1, -2, -9, -6]);
  shouldBe(108);
});

