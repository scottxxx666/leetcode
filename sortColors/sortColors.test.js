const sortColors = require('./sortColors');

let result;

function given(m) {
  result = m;
  sortColors(result);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('2 color sorted', () => {
  given([0, 1]);
  shouldBe([0, 1]);
});

test('2 color unsorted', () => {
  given([1, 0]);
  shouldBe([0, 1]);
});

test('3 element 2 color sorted', () => {
  given([0, 1, 1]);
  shouldBe([0, 1, 1]);
});

test('3 element 2 color unsorted (last)', () => {
  given([1, 1, 0]);
  shouldBe([0, 1, 1]);
});

test('3 element 2 color unsorted (mid)', () => {
  given([1, 0, 1]);
  shouldBe([0, 1, 1]);
});

test('3 color sorted', () => {
  given([0, 1, 2]);
  shouldBe([0, 1, 2]);
});

test('3 color unsorted (desc)', () => {
  given([2, 1, 0]);
  shouldBe([0, 1, 2]);
});

test('3 color unsorted (all diff)', () => {
  given([1, 2, 0]);
  shouldBe([0, 1, 2]);
});

