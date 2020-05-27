const possibleBipartition = require("./index");

let result;

function given(N, dislikes) {
  result = possibleBipartition(N, dislikes);
}

function shouldBe(expected) {
  expect(result).toBe(expected);
}

test('1 people', function () {
  given(1, []);
  shouldBe(true);
});

test('2 people no dislikes', function () {
  given(2, []);
  shouldBe(true);
});

test('2 people 1 dislikes', function () {
  given(2, [[1, 2]]);
  shouldBe(true);
});

test('3 people 0 dislikes', function () {
  given(3, []);
  shouldBe(true);
});

test('3 people 1 dislikes', function () {
  given(3, [[1, 2]]);
  shouldBe(true);
});

test('3 people 2 dislikes', function () {
  given(3, [[1, 2], [2, 3]]);
  shouldBe(true);
});

test('3 people 3 dislikes', function () {
  given(3, [[1, 2], [2, 3], [1, 3]]);
  shouldBe(false);
});

test('4 people 3 dislikes same person', function () {
  given(4, [[1, 2], [1, 3], [1, 4]]);
  shouldBe(true);
});

test('4 people 3 dislikes false', function () {
  given(4, [[1, 2], [2, 3], [1, 3]]);
  shouldBe(false);
});

test('4 people 4 dislikes true', function () {
  given(4, [[1, 2], [2, 3], [3, 4], [1, 4]]);
  shouldBe(true);
});

test('4 people 4 dislikes false', function () {
  given(4, [[1, 2], [2, 3], [3, 4], [2, 4]]);
  shouldBe(false);
});

test('5 people 5 dislikes false', function () {
  given(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]);
  shouldBe(false);
});

test('difficult', function () {
  given(10, [
    [2, 7],
    [4, 10],
    [4, 7],
    [1, 3],
    [4, 9],
    [4, 6],
    [2, 9],
    [4, 8],
    [4, 5],
    [2, 8],
    [2, 10],
    [1, 5],
    [1, 8],
    [2, 6],
    [1, 6],
    [1, 9],
    [1, 7],
    [1, 10],
    [2, 3],
    [2, 5],
    [3, 4],
  ]);
  shouldBe(true);
});

