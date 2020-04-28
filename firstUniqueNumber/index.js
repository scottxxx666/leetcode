function FirstUnique(nums) {
  this.set = new Set();
  this.alreadyHave = new Set();
  for (let each of nums) {
    this.add(each);
  }
}

FirstUnique.prototype.showFirstUnique = function () {
  const result = this.set.values().next();
  return result.done ? -1 : result.value;
};

FirstUnique.prototype.add = function (value) {
  if (this.alreadyHave.has(value)) {
    this.set.delete(value);
  } else {
    this.set.add(value);
  }
  this.alreadyHave.add(value);
};

module.exports = FirstUnique;
