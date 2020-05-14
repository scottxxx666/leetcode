const Trie = function () {
  this.head = new Map();
};

Trie.prototype.insert = function (word) {
  let pointer = this.head;
  for (let each of word) {
    if (!pointer.has(each)) {
      pointer.set(each, new Map());
    }
    pointer = pointer.get(each);
  }
  pointer.set('/t', null);
};

Trie.prototype.search = function (word) {
  let pointer = this.head;
  for (let each of word) {
    if (!pointer.has(each)) {
      return false;
    }
    pointer = pointer.get(each);
  }
  return pointer.has('/t');
};

Trie.prototype.startsWith = function (prefix) {
  let pointer = this.head;
  for (let each of prefix) {
    if (!pointer.has(each)) {
      return false;
    }
    pointer = pointer.get(each);
  }
  return true;
};

module.exports = Trie;

