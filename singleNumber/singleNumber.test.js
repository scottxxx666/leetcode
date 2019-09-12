const wordSearch = require('./singleNumber');

let result;

function given(a) {
  result = wordSearch(a);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1 integer', () => {
  given([1]);
  shouldBe(1);
});

test('2 integer (single first)', () => {
  given([1, 2, 2]);
  shouldBe(1);
});

test('2 integer (single mid)', () => {
  given([2, 1, 2]);
  shouldBe(1);
});

test('2 integer (single end)', () => {
  given([2, 2, 1]);
  shouldBe(1);
});

