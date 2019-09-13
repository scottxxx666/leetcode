const majorityElement = require('./majorityElement');

let result;

function given(nums) {
  result = majorityElement(nums);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1 element', () => {
  given([1]);
  shouldBe(1);
});

test('2 element', () => {
  given([1, 1]);
  shouldBe(1);
});

test('3 element', () => {
  given([1, 2, 2]);
  shouldBe(2);
});

