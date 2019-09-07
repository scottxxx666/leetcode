const merge = require('./merge');

let result;

function given(matrix) {
  result = merge(matrix);
}

function shouldBe(val) {
  expect(result.sort()).toEqual(val.sort());
}

test('1 interval', () => {
  given([[1, 2]]);
  shouldBe([[1, 2]]);
});

test('2 no overlap intervals', () => {
  given([[1, 2], [3, 4]]);
  shouldBe([[1, 2], [3, 4]]);
});

test('2 overlap intervals', () => {
  given([[1, 3], [2, 4]]);
  shouldBe([[1, 4]]);
});

test('2 overlap intervals reverse order', () => {
  given([[2, 4], [1, 3]]);
  shouldBe([[1, 4]]);
});

test('3 intervals (first 2 overlap', () => {
  given([[1, 3], [2, 4], [5, 6]]);
  shouldBe([[1, 4], [5, 6]]);
});

test('3 intervals (last 2 overlap', () => {
  given([[5, 6], [1, 3], [2, 4]]);
  shouldBe([[5, 6], [1, 4]]);
});

test('3 intervals (3 overlap', () => {
  given([[2, 6], [1, 3], [2, 4]]);
  shouldBe([[1, 6]]);
});

test('interval exactly overlap', () => {
  given([[1, 2], [2, 3]]);
  shouldBe([[1, 3]]);
});

test('overlap whole interval', () => {
  given([[1, 4], [2, 3]]);
  shouldBe([[1, 4]]);
});

test('2 overlaps in 4 intervals', () => {
  given([[1, 3], [2, 6], [8, 10], [15, 18]]);
  shouldBe([[1, 6], [8, 10], [15, 18]]);
});

