function NestedIterator(nestedList) {
  function spread(arr, list, i) {
    const target = list[i];
    if (!target) {
      return;
    }
    if (Array.isArray(target)) {
      for (let j = 0; j < target.length; j++) {
        spread(arr, target, j);
      }
      return;
    }
    if (target.isInteger()) {
      arr.push(target.getInteger());
      return;
    }
    const nextList = target.getList();
    for (let j = 0; j < nextList.length; j++) {
      spread(arr, nextList, j);
    }
  }

  this.list = [];
  for (let i = 0; i < nestedList.length; i++) {
    spread(this.list, nestedList, i);
  }
  this.pointer = 0;
  this.target = null;
}

NestedIterator.prototype.hasNext = function () {
  return this.pointer <= this.list.length - 1;
};

NestedIterator.prototype.next = function () {
  return this.list[this.pointer++];
};

module.exports = NestedIterator;
