const minPathSum = require('./minPathSum');

let result;

function given(m) {
  result = minPathSum(m);
}

function shouldBe(val) {
  expect(result).toEqual(val);
}

test('1,1', () => {
  given([[1]]);
  shouldBe(1);
});

test('2,1', () => {
  given([[1, 1]]);
  shouldBe(2);
});

test('1,2', () => {
  given([[1], [2]]);
  shouldBe(3);
});

test('2,2 right => down', () => {
  given([[1, 2], [3, 4]]);
  shouldBe(7);
});

test('2,2 down => right', () => {
  given([[1, 4], [3, 4]]);
  shouldBe(8);
});

