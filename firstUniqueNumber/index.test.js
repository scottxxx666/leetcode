const FirstUnique = require("./index");

let firstUnique;

function given(numbers) {
  firstUnique = new FirstUnique(numbers);
  return firstUnique;
}

function firstUniqueShouldBe(expected) {
  expect(firstUnique.showFirstUnique()).toBe(expected);
}

function add(adder) {
  firstUnique.add(adder);
}

test('1 nums', function () {
  given([1]);
  firstUniqueShouldBe(1);
});

describe('2 nums', function () {
  test('2 diff', function () {
    given([1, 2]);
    firstUniqueShouldBe(1);
  });

  test('2 same', function () {
    given([1, 1]);
    firstUniqueShouldBe(-1);
  });

  test('1 + 1 diff', function () {
    given([1]);
    add(2);
    firstUniqueShouldBe(1);
  });

  test('1 + 1 same', function () {
    given([1]);
    add(1);
    firstUniqueShouldBe(-1);
  });
});

describe('3 nums', function () {
  test('2 + 1 diff', function () {
    given([1, 2]);
    add(3);
    firstUniqueShouldBe(1);
  });

  test('2 + 1 first same', function () {
    given([1, 2]);
    add(1);
    firstUniqueShouldBe(2);
  });

  test('2 same + 1 first diff', function () {
    given([1, 1]);
    add(2);
    firstUniqueShouldBe(2);
  });

  test('2 same + 1 same diff', function () {
    given([1, 1]);
    add(1);
    firstUniqueShouldBe(-1);
  });

  test('1 + 1 diff + 1 first same', function () {
    given([1]);
    add(2);
    add(1);
    firstUniqueShouldBe(2);
  });
});
