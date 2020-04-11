const coinChange = require("./index");

function shouldBe(expected) {
  expect(result).toBe(expected);
}

let result;

function given(coins, amount) {
  result = coinChange(coins, amount);
}

test('1 coin same amount', function () {
  given([2], 2);
  shouldBe(1);
});

test('1 coin diff amount', function () {
  given([2], 4);
  shouldBe(2);
});

test('1 coin impossible', function () {
  given([2], 3);
  shouldBe(-1);
});

test('2 coin', function () {
  given([1, 2], 2);
  shouldBe(1);
});

test('2 coin greater than maximum twice', function () {
  given([1, 2], 4);
  shouldBe(2);
});

test('mid coin is better', function () {
  given([1, 4, 5], 12);
  shouldBe(3);
});

test('amount 0', function () {
  given([1], 0);
  shouldBe(0);
});

test('difficult', function () {
  given([186, 419, 83, 408], 6249);
  shouldBe(20);
});

