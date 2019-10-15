const ListNode = require('./listNode');

module.exports = function (head, n) {
  const start = new ListNode();
  start.next = head;
  let fast = start;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  let slow = start;
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return start.next;
};

