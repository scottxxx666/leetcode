const mergeTwoSortedList = require('./mergeTwoSortedList');
const ListNode = require('./listNode');

function createNode(val) {
  const l1 = new ListNode(val);
  return l1;
}

function createList(array) {
  if (array.length === 0) {
    return null;
  }
  let result = new ListNode(array[0]);
  let pointer = result;
  for (let i = 1; i < array.length; i++) {
    pointer.next = new ListNode(array[i])
    pointer = pointer.next
  }
  return result;
}

describe('Test mergeTwoSortedList', function () {
  let result;

  function given(l1, l2) {
    result = mergeTwoSortedList(createList(l1), createList(l2));
  }

  function shouldBe(array) {
    expect(result).toEqual(createList(array));
  }

  test('Two empty list', () => {
    given([], []);
    shouldBe([]);
  });

  test('First list is empty', () => {
    given([], [1]);
    shouldBe([1]);
  });

  test('Second list is empty', () => {
    given([1], []);
    shouldBe([1]);
  });

  test('Two same list with a number', () => {
    given([1], [1]);
    shouldBe([1, 1]);
  });

  test('Two diff list with a number', () => {
    given([1], [2]);
    shouldBe([1, 2]);
  });

  test('Two diff list with a number', () => {
    given([2], [1]);
    shouldBe([1, 2]);
  });

  test('Two diff list with two number', () => {
    given([1, 2], [1]);
    shouldBe([1, 1, 2]);
  });

  test('Two diff list with two number', () => {
    given([1, 3], [2]);
    shouldBe([1, 2, 3]);
  });

  test('Two diff list with two number', () => {
    given([2, 3], [1]);
    shouldBe([1, 2, 3]);
  });

});

