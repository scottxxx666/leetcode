const removeElement = require('./removeElement');

let result;

function given(nums, val) {
  result = removeElement(nums, val);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('remove 1 element', () => {
  given([1], 1);
  shouldBe(0);
});

test('1 element and no remove', () => {
  given([1], 0);
  shouldBe(1);
});

test('2 same element remove all', () => {
  given([1, 1], 1);
  shouldBe(0);
});

test('2 diff element remove first', () => {
  given([0, 1], 0);
  shouldBe(1);
});

test('2 diff element remove last', () => {
  given([0, 1], 1);
  shouldBe(1);
});

