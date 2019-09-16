function LRUCache(capacity) {
  this.capacity = capacity;
  this.linkList = new LinkList();
  this.map = new Map();
}

const Node = function (key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};

const LinkList = function () {
  this.head = null;
  this.tail = null;
};

LinkList.prototype.add = function (node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    return;
  }
  this.tail.next = node;
  node.prev = this.tail;
  this.tail = node;
};

LinkList.prototype.remove = function () {
  const target = this.head;
  this.head = this.head.next;
  return target;
};

LinkList.prototype.moveToEnd = function (node) {
  if (node === this.tail) {
    return;
  }
  if (node === this.head && node.next) {
    this.head = this.head.next;
  }

  if (node.prev) {
    node.prev.next = node.next;
  }
  if (node.next) {
    node.next.prev = node.prev;
  }
  node.prev = this.tail;
  node.next = null;
  this.tail.next = node;
  this.tail = node;
};

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const node = this.map.get(key);
  this.linkList.moveToEnd(node);

  return node.val;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.val = value;
    this.linkList.moveToEnd(node);
    return;
  }
  if (this.map.size === this.capacity) {

    const removed = this.linkList.remove();
    if (removed) {
      this.map.delete(removed.key);
    }
  }
  const node = new Node(key, value);
  this.map.set(key, node);
  this.linkList.add(node);
};

module.exports = LRUCache;
