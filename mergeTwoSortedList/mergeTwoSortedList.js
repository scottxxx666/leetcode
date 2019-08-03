const ListNode = require('./listNode');
module.exports = function (l1, l2) {
  let result = null;
  let pointer;
  while (l1 !== null || l2 !== null) {
    const l1Val = l1 === null ? Number.POSITIVE_INFINITY : l1.val;
    const l2Val = l2 === null ? Number.POSITIVE_INFINITY : l2.val;
    let small;
    if (l1Val <= l2Val) {
      small = l1.val;
      l1 = l1.next;
    } else {
      small = l2.val;
      l2 = l2.next;
    }
    if (result === null) {
      result = new ListNode(small);
      pointer = result;
    } else {
      pointer.next = new ListNode(small);
      pointer = pointer.next;
    }
  }
  return result;
};
