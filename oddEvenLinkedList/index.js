const oddEvenList = function (head) {
  const oddHead = new ListNode();
  let odd = oddHead;
  let even = new ListNode();
  let pointer = head;
  for (let index = 0; pointer !== null; index++) {
    if (index % 2 === 0) {
      even.next = pointer;
      even = even.next;
    } else {
      odd.next = pointer;
      odd = odd.next;
    }
    pointer = pointer.next;
  }
  odd.next = null;
  even.next = oddHead.next;
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

module.exports = oddEvenList;
