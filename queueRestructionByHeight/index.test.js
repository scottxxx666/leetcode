const reconstructQueue = require("./index");

let result;

function given(people) {
  result = reconstructQueue(people);
}

function shouldBe(expected) {
  expect(result).toStrictEqual(expected);
}

test('', function () {
  given([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]);
  shouldBe([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]);
});
