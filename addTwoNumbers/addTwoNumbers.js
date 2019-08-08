const ListNode = require('./listNode');
const addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let pointer = result;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let val1 = l1 === null ? 0 : l1.val;
    const val2 = l2 === null ? 0 : l2.val;
    val1 += val2 + carry;
    if (val1 >= 10) {
      carry = 1;
      pointer.next = new ListNode(val1 % 10);
    } else {
      carry = 0;
      pointer.next = new ListNode(val1);
    }

    pointer = pointer.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (carry !== 0) {
    pointer.next = new ListNode(carry);
  }
  return result.next;
};

module.exports = addTwoNumbers;