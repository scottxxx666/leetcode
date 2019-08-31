const permute = require('./permute');

let result;

function given(nums) {
  result = permute(nums);
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

test('2 num', () => {
  given([1, 2]);
  shouldBe([
    [1, 2],
    [2, 1]
  ]);
});

test('3 num', () => {
  given([1, 2, 3]);
  shouldBe([
    [1, 2, 3],
    [1, 3, 2],
    [2, 3, 1],
    [2, 1, 3],
    [3, 1, 2],
    [3, 2, 1]
  ]);
});

