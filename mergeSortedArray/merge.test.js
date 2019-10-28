const merge = require('./merge');

let result;

function given(nums1, m, nums2, nums) {
  result = nums1;
  merge(result, m, nums2, nums);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1 small merge 1 large', () => {
  given([1, 0], 1, [2], 1);
  shouldBe([1, 2]);
});

test('1 large merge 1 small', () => {
  given([2, 0], 1, [1], 1);
  shouldBe([1, 2]);
});

test('1 merge 1 equal', () => {
  given([2, 0], 1, [2], 1);
  shouldBe([2, 2]);
});

test('2 nums merge 1 small', () => {
  given([1, 2, 0], 2, [0], 1);
  shouldBe([0, 1, 2]);
});

test('2 nums merge 1 mid', () => {
  given([1, 3, 0], 2, [2], 1);
  shouldBe([1, 2, 3]);
});

test('2 nums merge 1 large', () => {
  given([1, 3, 0], 2, [5], 1);
  shouldBe([1, 3, 5]);
});

test('nums1 much more than nums2', () => {
  given([1, 2, 3, 4, 5, 6, 7, 0], 7, [8], 1);
  shouldBe([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('nums1 much less than nums2', () => {
  given([3, 0, 0, 0, 0, 0, 0, 0], 1, [1, 2, 3, 4, 5, 6, 7], 7);
  shouldBe([1, 2, 3, 3, 4, 5, 6, 7]);
});

test('2222', () => {
  given([-10, -10, -9, -9, 0, 0, 0, 0, 0], 4, [-10, -10, -9, -9, -9], 5);
  shouldBe([-10, -10, -10, -10, -9, -9, -9, -9, -9]);
});

