const kCloset = require("./index");

let result;

function given(points, k) {
  result = kCloset(points, k);
}

function shouldBe(expected) {
  expect(result).toStrictEqual(expected);
}

test('2 points K=1', function () {
  given([[1, 3], [-2, 2]], 1);
  shouldBe([[-2, 2]]);
});

test('same distance', function () {
  given([[1, 0], [-1, 0]], 1);
  shouldBe([[-1, 0]]);
});

test('same distance2', function () {
  given([[1, 0], [-1, 0]], 2);
  shouldBe([[-1, 0], [1, 0]]);
});

test('difficult', function () {
  given([[6, 10], [-3, 3], [-2, 5], [0, 2]], 3);
  shouldBe([[0, 2], [-3, 3], [-2, 5]]);
});

