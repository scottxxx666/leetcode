const reorderList = function (head) {
  if (!head || !head.next) {
    return;
  }
  let n = 0;
  let pointer = head;
  while (pointer.next) {
    n++;
    pointer = pointer.next;
  }
  pointer = head;
  for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
    pointer = pointer.next;
  }
  const t = pointer.next;
  pointer.next = null;
  pointer = t;

  let prev = null;
  let curr = pointer;
  let next = pointer.next;
  while (curr && next) {
    const temp = next.next;
    next.next = curr;
    curr.next = prev;

    prev = curr;
    curr = next;
    next = temp;
  }

  let afterHead = curr;
  while (afterHead) {
    const temp = head.next;
    head.next = afterHead;
    afterHead = afterHead.next;
    if (head.next) {
      head.next.next = temp;
    }
    head = temp;
  }
};
