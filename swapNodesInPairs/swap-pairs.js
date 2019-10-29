const ListNode = require('./list-node');

module.exports = function swap(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const temp = head.next;
  head.next = swap(head.next.next);
  temp.next = head;
  return temp;
};
