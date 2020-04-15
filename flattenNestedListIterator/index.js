function NestedIterator(nestedList) {
  this.list = nestedList;
  this.pointer = 0;
  this.target = null;
  this.update();
}

NestedIterator.prototype.hasNext = function () {
  if (!this.target || (this.target instanceof NestedIterator && !this.target.hasNext())) {
    return false;
  }
  return true;
};

NestedIterator.prototype.update = function () {
  if (this.hasNext() || this.pointer >= this.list.length) {
    return;
  }
  const newTarget = this.list[this.pointer];
  if (newTarget.isInteger()) {
    this.target = newTarget;
    return;
  }
  this.target = new NestedIterator(newTarget.getList());
  if (!this.target.hasNext()) {
    this.pointer++;
    this.update();
  }
};

NestedIterator.prototype.next = function () {
  if (this.target instanceof NestedIterator) {
    const result = this.target.next();
    if (!this.target.hasNext()) {
      this.pointer++;
      this.target = null;
      this.update();
    }
    return result;
  }
  const result = this.target.getInteger();
  this.pointer++;
  this.target = null;
  this.update();
  return result;
};

module.exports = NestedIterator;
