const ListNode = require('./list-node');

module.exports = function (head) {
  const front = new ListNode();
  front.next = head;
  let pointer = front;

  while (pointer.next && pointer.next.next) {
    const temp = pointer.next.next;
    pointer.next.next = temp.next;
    temp.next = pointer.next;
    pointer.next = temp;

    pointer = pointer.next.next;
  }
  return front.next;
};
