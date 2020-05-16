const oddEvenList = function (head) {
  if (head === null) {
    return null;
  }
  let even = head;
  let odd = head.next;
  let oddHead = odd;
  while (odd && odd.next) {
    even.next = odd.next;
    even = even.next;
    odd.next = even.next;
    odd = odd.next;
  }
  even.next = oddHead;
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

module.exports = oddEvenList;
