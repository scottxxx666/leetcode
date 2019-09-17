function LRUCache(capacity) {
  this.capacity = capacity;
  this.linkList = new LinkList();
  this.map = new Map();
}

const Node = function (key = null, val = null) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};

const LinkList = function () {
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LinkList.prototype.add = function (node) {
  node.prev = this.tail.prev;
  node.next = this.tail;
  this.tail.prev.next = node;
  this.tail.prev = node;
};

LinkList.prototype.remove = function () {
  const target = this.head.next;
  this.head.next = target.next;
  target.next.prev = this.head;
  return target;
};

LinkList.prototype.moveToEnd = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.add(node);
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
