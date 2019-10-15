const removeNthFromEnd = require('./removeNthFromEnd');
const ListNode = require('./listNode');

let result;

function createList(a) {
  const head = new ListNode(null);
  let pointer = head;
  for (value of a) {
    pointer.next = new ListNode(value);
    pointer = pointer.next;
  }
  return head.next;
}

function given(a, b) {
  result = removeNthFromEnd(createList(a), b);
}

function shouldBe(value) {
  expect(result).toEqual(createList(value));
}

test('1 elements', () => {
  given([0], 1);
  shouldBe([]);
});

test('2 elements (n = 1)', () => {
  given([1, 2], 1);
  shouldBe([1]);
});

test('2 elements (n = 2)', () => {
  given([1, 2], 2);
  shouldBe([2]);
});

test('3 elements (n = 1)', () => {
  given([1, 2, 3], 1);
  shouldBe([1, 2]);
});

test('3 elements (n = 2)', () => {
  given([1, 2, 3], 2);
  shouldBe([1, 3]);
});

test('3 elements (n = 3)', () => {
  given([1, 2, 3], 3);
  shouldBe([2, 3]);
});

