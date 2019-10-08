const convert = require('./searchInsert');

let result;

function given(a, b) {
  result = convert(a, b);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('empty array', () => {
  given([], 3);
  shouldBe(0);
});

test('1 element, target is largest', () => {
  given([1], 2);
  shouldBe(1);
});

test('1 element, target is equal', () => {
  given([1], 1);
  shouldBe(0);
});

test('1 element, target is smallest', () => {
  given([1], 0);
  shouldBe(0);
});

test('2 element, target is largest', () => {
  given([1, 2], 3);
  shouldBe(2);
});

test('2 element, target is equal largest', () => {
  given([1, 2], 2);
  shouldBe(1);
});

test('2 element, target is equal smallest', () => {
  given([1, 2], 1);
  shouldBe(0);
});

test('2 element, target is smallest', () => {
  given([1, 2], 0);
  shouldBe(0);
});

test('2 element, target is between', () => {
  given([1, 3], 2);
  shouldBe(1);
});

