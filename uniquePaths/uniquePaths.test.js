const uniquePaths = require('./uniquePaths');

let result;

function given(m, n) {
  result = uniquePaths(m, n);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('m, n = 2, 1', () => {
  given(2, 1);
  shouldBe(1);
});

test('m, n = 3, 1', () => {
  given(3, 1);
  shouldBe(1);
});

test('m, n = 1, 2', () => {
  given(1, 2);
  shouldBe(1);
});

test('m, n = 2, 2', () => {
  given(2, 2);
  shouldBe(2);
});

test('m, n = 3, 2', () => {
  given(3, 2);
  shouldBe(3);
});

test('m, n = 7, 3', () => {
  given(7, 3);
  shouldBe(28);
});

