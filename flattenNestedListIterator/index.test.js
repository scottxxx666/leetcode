const NestedIterator = require("./index");
const NestedInteger = require('./nestedInteger');

let arr;

function createNestedIntegers(nestedList) {
  let input = [];
  for (let each of nestedList) {
    if (Array.isArray(each)) {
      input.push(createNestedIntegers(each));
    } else {
      input.push(new NestedInteger(each));
    }
  }
  return input;
}

function given(nestedList) {
  const input = createNestedIntegers(nestedList);
  let i = new NestedIterator(input);
  arr = [];
  while (i.hasNext()) {
    arr.push(i.next());
  }
  return arr;
}

function shouldBe(expected) {
  expect(arr).toStrictEqual(expected);
}

test('empty', function () {
  given([]);
  shouldBe([]);
});

test('1 element', function () {
  given([1]);
  shouldBe([1]);
});

test('1 element dimension 2', function () {
  given([[1]]);
  shouldBe([1]);
});

test('2 element 1 dimension 2', function () {
  given([[1], 2]);
  shouldBe([1, 2]);
});

test('3 element 1 dimension 2', function () {
  given([[1], 2, [3]]);
  shouldBe([1, 2, 3]);
});

test('3 element 1 dimension 3', function () {
  given([[1, [2, 4]], 2, [3]]);
  shouldBe([1, 2, 4, 2, 3]);
});

test('difficult', function () {
  given([[1, 1], 2, [1, 1]]);
  shouldBe([1, 1, 2, 1, 1]);
});

test('2 dimension empty', function () {
  given([[]]);
  shouldBe([]);
});

