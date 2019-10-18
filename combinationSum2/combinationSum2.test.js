const combinationSum2 = require('./combinationSum2');

let result;

function given(a, b) {
  result = combinationSum2(a, b);
}

function shouldBe(value) {
  expect(result.sort()).toEqual(value.sort());
}

test('1 elements 1 solution', () => {
  given([1], 1);
  shouldBe([
    [1],
  ]);
});

test('2 elements 1 solution', () => {
  given([1, 2], 2);
  shouldBe([
    [2],
  ]);
});

test('duplicate elements', () => {
  given([1, 1, 2], 2);
  shouldBe([
    [1, 1],
    [2]
  ]);
});

test('duplicate elements', () => {
  given([1, 1, 2, 2, 3, 4], 4);
  shouldBe([
    [1, 3],
    [1, 1, 2],
    [2, 2],
    [4],
  ]);
});

