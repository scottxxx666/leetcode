module.exports = function (head, n) {
  let array = [];
  let pointer = head;
  while (pointer !== null) {
    array.push(pointer);
    pointer = pointer.next;
  }
  if (array[array.length - n] === head) {
    head = array[array.length - n].next;
  } else {
    array[array.length - n - 1].next = array[array.length - n].next;
  }
  return head;
};

