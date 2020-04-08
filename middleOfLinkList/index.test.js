const middleNode = require('./index');
const ListNode = require('./listNode');

function createList(arr) {
  const headBefore = new ListNode(null);
  let pointer = headBefore;
  for (let each of arr) {
    pointer.next = new ListNode(each);
    pointer = pointer.next;
  }
  return headBefore.next;
}

function shouldReturn(expected) {
  expect(middleNode(head)).toStrictEqual(createList(expected));
}

let head;

function given(arr) {
  head = createList(arr);
}

test('1 node', function () {
  given([1]);
  shouldReturn([1]);
});

test('2 node', function () {
  given([1, 2]);
  shouldReturn([2]);
});

test('3 node', function () {
  given([1, 2, 3]);
  shouldReturn([2, 3]);
});

test('4 node', function () {
  given([1, 2, 3, 4]);
  shouldReturn([3, 4]);
});

