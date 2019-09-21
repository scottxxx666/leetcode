const findKthLargest = require('./findKthLargest');

let result;

function given(a, b) {
  result = findKthLargest(a, b);
}

function shouldBe(value) {
  expect(result).toEqual(value);
}

test('1 element', () => {
  given([1], 1);
  shouldBe(1);
});

test('2 ascending element 1th largest', () => {
  given([1, 2], 1);
  shouldBe(2);
});

test('2 ascending element 2th largest', () => {
  given([1, 2], 2);
  shouldBe(1);
});

test('2 desc element 1th largest', () => {
  given([2, 1], 1);
  shouldBe(2);
});

test('2 desc element 2th largest', () => {
  given([2, 1], 2);
  shouldBe(1);
});

test('3 element 1th largest', () => {
  given([2, 1, 3], 1);
  shouldBe(3);
});

test('3 element 2th largest', () => {
  given([2, 1, 3], 2);
  shouldBe(2);
});

test('3 element 3th largest', () => {
  given([2, 1, 3], 3);
  shouldBe(1);
});

test('3 element 1th largest(largest mid)', () => {
  given([1, 3, 2], 1);
  shouldBe(3);
});

test('3 element 1th largest(largest mid 2)', () => {
  given([2, 3, 1], 1);
  shouldBe(3);
});

test('duplicate larger than target', () => {
  given([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
  shouldBe(4);
});

