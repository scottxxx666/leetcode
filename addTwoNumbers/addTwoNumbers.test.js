const addTwoNumbers = require('./addTwoNumbers');
const ListNode = require('./listNode');

const List = function (val) {
  const result = new ListNode(val[0]);
  const pointer = result;
  for (let i = 1; i < val.length; i++) {
    pointer.next = new ListNode(val[i]);
  }
  return result;
};

function expectAddTwoNumbers(l1, l2) {
  return expect(addTwoNumbers(List(l1), List(l2)));
}

test('0 + 1 = 1', () => {
  expectAddTwoNumbers([0], [1]).toEqual(List([1]));
});

test('1 + 1 = 2', () => {
  expectAddTwoNumbers([1], [1]).toEqual(List([2]));
});

test('10 + 11 = 21', () => {
  expectAddTwoNumbers([0, 1], [1, 1]).toEqual(List([1, 2]));
});

test('15 + 15 = 30', () => {
  expectAddTwoNumbers([5, 1], [5, 1]).toEqual(List([0, 3]));
});

test('15 + 1 = 16', () => {
  expectAddTwoNumbers([5, 1], [1]).toEqual(List([6, 1]));
});

test('1 + 15 = 16', () => {
  expectAddTwoNumbers([1], [5, 1]).toEqual(List([6, 1]));
});

test('5 + 15 = 20', () => {
  expectAddTwoNumbers([5], [5]).toEqual(List([0, 1]));
});

test('5 + 5 = 10', () => {
  expectAddTwoNumbers([5], [5]).toEqual(List([0, 1]));
});
