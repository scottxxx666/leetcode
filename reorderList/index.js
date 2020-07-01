const reorderList = function (head) {
  if (!head || !head.next) {
    return;
  }

  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let pointer = slow.next;
  slow.next = null;

  let prev = null;
  while (pointer) {
    const temp = pointer.next;
    pointer.next = prev;
    prev = pointer;
    pointer = temp;
  }

  let afterHead = prev;
  while (afterHead) {
    const temp = head.next;
    head.next = afterHead;
    afterHead = afterHead.next;
    head.next.next = temp;
    head = temp;
  }
};
