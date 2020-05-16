const oddEvenList = function (head) {
  let pointer = head ? head.next : null;
  let prev = head;
  let evenTail = head;
  for (let index = 1; pointer !== null; index++) {
    if (index % 2 === 0) {
      const temp = evenTail.next;
      evenTail.next = pointer;
      evenTail = evenTail.next;
      const next = pointer.next;
      pointer.next = temp;
      prev.next = next;
      pointer = next;
    } else {
      prev = pointer;
      pointer = pointer.next;
    }
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

module.exports = oddEvenList;
