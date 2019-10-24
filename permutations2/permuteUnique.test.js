const permuteUnique = require('./permuteUnique');

let result;

function given(nums) {
  result = permuteUnique(nums);
}

function shouldBe(val) {
  expect(result.sort()).toEqual(val.sort());
}

test('1 num', () => {
  given([1]);
  shouldBe([
    [1]
  ]);
});

test('2 diff num', () => {
  given([1, 2]);
  shouldBe([
    [1, 2],
    [2, 1],
  ]);

});

test('3 diff num', () => {
  given([1, 2, 3]);
  shouldBe([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});

test('2 same num', () => {
  given([1, 1]);
  shouldBe([
    [1, 1],
  ]);
});

test('2 same 1 diff num', () => {
  given([1, 1, 2]);
  shouldBe([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ]);
});

test('3 same 1 diff num', () => {
  given([3, 3, 0, 3]);
  shouldBe([
    [0, 3, 3, 3],
    [3, 0, 3, 3],
    [3, 3, 0, 3],
    [3, 3, 3, 0],
  ]);
});

