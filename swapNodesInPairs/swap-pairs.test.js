const swapPairs = require('./swap-pairs');
const ListNode = require('./list-node');

let result;

function createNodes(list) {
  const head = new ListNode();
  let pointer = head;
  for (let each of list) {
    pointer.next = new ListNode(each);
    pointer = pointer.next;
  }
  return head.next;
}

function given(list) {
  const head = createNodes(list);
  result = swapPairs(head);
}

function shouldBe(val) {
  expect(result).toEqual(createNodes(val));
}

test('1 node', () => {
  given([1]);
  shouldBe([1]);
});

test('2 node', () => {
  given([1, 2]);
  shouldBe([2, 1]);
});

test('3 node', () => {
  given([1, 2, 3]);
  shouldBe([2, 1, 3]);
});

test('4 node', () => {
  given([1, 2, 3, 4]);
  shouldBe([2, 1, 4, 3]);
});

