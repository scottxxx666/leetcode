const lastStoneWeight = require("./index");

let result;

function given(stones) {
  result = lastStoneWeight(stones);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('1 rock', function () {
  given([1]);
  shouldBe(1);
});

test('2 rock first bigger', function () {
  given([1, 3]);
  shouldBe(2);
});

test('2 rock last bigger', function () {
  given([4, 1]);
  shouldBe(3);
});

test('select 2 heaviest stones first', function () {
  given([4, 1, 3]);
  shouldBe(0);
});

