const combinationSum = require('./combinationSum');

let candidates;
let target;

function given(c, t) {
  candidates = c;
  target = t;
}

function shouldBe(soultions) {
  expect(combinationSum(candidates, target).sort()).toEqual(soultions.sort());
}

test('1 candidate as same as target', () => {
  given([1], 1);
  shouldBe([[1]]);
});

test('2 candidate and 2 solutions', () => {
  given([1, 2], 2);
  shouldBe([
    [1, 1],
    [2]
  ]);
});

test('same candidate multiple times', () => {
  given([2, 3, 6, 7], 7);
  shouldBe([
    [2, 2, 3],
    [7],
  ]);
});

test('diff candidate multiple times', () => {
  given([2, 3, 5], 8);
  shouldBe([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ]);
});

test('unsorted candidates', () => {
  given([3, 12, 9, 11, 6, 7, 8, 5, 4], 15);
  shouldBe([
    [3, 3, 3, 3, 3],
    [3, 3, 3, 6],
    [3, 3, 4, 5],
    [3, 3, 9],
    [3, 4, 4, 4],
    [3, 4, 8],
    [3, 5, 7],
    [3, 6, 6],
    [3, 12],
    [4, 4, 7],
    [4, 5, 6],
    [4, 11],
    [5, 5, 5],
    [6, 9],
    [7, 8]]);
});

