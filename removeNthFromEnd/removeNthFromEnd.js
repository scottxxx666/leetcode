module.exports = function (head, n) {
  let fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (fast === null) {
    head = head.next;
    return head;
  }
  fast = fast.next;
  let slow = head;
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

