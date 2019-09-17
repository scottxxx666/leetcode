function LRUCache(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.iter = this.map[Symbol.iterator]();
}

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const value = this.map.get(key);
  this.map.delete(key);
  this.map.set(key, value);
  return value;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
    this.map.set(key, value);
    return;
  }
  if (this.map.size === this.capacity) {
    const next = this.iter.next();
    this.map.delete(next.value[0]);
  }
  this.map.set(key, value);
};

module.exports = LRUCache;
