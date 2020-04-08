const ListNode = require('./listNode');

module.exports = (head) => {
  let length = 0;
  let prev = new ListNode(null);
  prev.next = head;
  let pointer = prev.next;
  while (pointer !== null) {
    length++;
    const temp = prev;
    prev = pointer;
    pointer = pointer.next;
    prev.next = temp;
  }

  pointer = prev;
  prev = null;
  length = Math.ceil(length / 2);
  for (let i = length; i > 0; i--) {
    const temp = prev;
    prev = pointer;
    pointer = pointer.next;
    prev.next = temp;
  }
  return prev;
};
