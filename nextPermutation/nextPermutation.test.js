const nextPermutation = require('./nextPermutation');

let nums;

function given(input) {
  nums = input;
}

function shouldBe(numbers) {
  nextPermutation(nums);
  expect(nums).toEqual(numbers);
}

test('1 integer return itself', () => {
  given([1]);
  shouldBe([1]);
});

test('2 integer', () => {
  given([1, 2]);
  shouldBe([2, 1])
});

test('3 integer exchange mid and end', () => {
  given([1, 2, 3]);
  shouldBe([1, 3, 2])
});

test('3 integer exchange start and mid', () => {
  given([2, 3, 1]);
  shouldBe([3, 1, 2])
});

test('3 integer exchange start and mid', () => {
  given([3, 2, 1]);
  shouldBe([1, 2, 3])
});

test('multiple integer but only reverse end', () => {
  given([1, 2, 0, 3, 0, 1, 2, 4]);
  shouldBe([1, 2, 0, 3, 0, 1, 4, 2])
});

