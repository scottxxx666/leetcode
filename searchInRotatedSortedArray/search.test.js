const search = require('./search');

let result;

function given(nums, target) {
  result = search(nums, target);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('not found -1', () => {
  given([1], 0);
  shouldBe(-1);
});

test('1 element', () => {
  given([1], 1);
  shouldBe(0);
});

test('2 element', () => {
  given([1, 2], 2);
  shouldBe(1);
});

test('2 element', () => {
  given([2, 1], 1);
  shouldBe(1);
});

test('3 element', () => {
  given([1, 2, 3], 3);
  shouldBe(2);
});

test('3 element and rotated', () => {
  given([2, 3, 1], 3);
  shouldBe(1);
});

test('3 element and rotated', () => {
  given([4, 5, 6, 7, 0, 1, 2], 0);
  shouldBe(4);
});

test('3 element and rotated', () => {
  given([4, 5, 6, 7, 0, 1, 2], 4);
  shouldBe(0);

});

