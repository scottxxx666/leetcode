const ListNode = require('./listNode');
module.exports = function (l1, l2) {
  if (l1 === undefined || l1 === null) {
    return l2;
  }
  if (l2 === undefined || l2 === null) {
    return l1;
  }
  let result;
  if (l1.val <= l2.val) {
    result = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    result = new ListNode(l2.val);
    l2 = l2.next;
  }
  let pointer = result;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      pointer.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      pointer.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    pointer = pointer.next;
  }
  while (l1 !== null) {
    pointer.next = new ListNode(l1.val);
    l1 = l1.next;
    pointer = pointer.next;
  }
  while (l2 !== null) {
    pointer.next = new ListNode(l2.val);
    l2 = l2.next;
    pointer = pointer.next;
  }
  return result;
};
