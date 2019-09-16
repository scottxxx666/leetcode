const LRUCache = require('./LRUCache');

let cache;

function putCache(items) {
  for (let [key, value] of items) {
    cache.put(key, value);
  }
}

function given(capacity, items) {
  cache = new LRUCache(capacity);
  putCache(items);
}

function getCache(key) {
  return cache.get(key);
}

function shouldBe(items) {
  for (let [key, val] of items) {
    expect(getCache(key)).toEqual(val);
  }
}

test('1 element and key exist', () => {
  given(1, [[1, 123]]);
  shouldBe([[1, 123]]);
});

test('1 element and key not exist', () => {
  given(1, [[1, 123]]);
  shouldBe([[2, -1]]);
});

test('2 element and key exist', () => {
  given(2, [[1, 123], [2, 234]]);
  shouldBe([[1, 123], [2, 234]]);
});

test('2 element and key not exist', () => {
  given(2, [[1, 123], [2, 234]]);
  shouldBe([[0, -1]]);
});

test('1 capacity 2 element replace first', () => {
  given(1, [[1, 123], [2, 234]]);
  shouldBe([[1, -1], [2, 234]]);
});

test('2 capacity 3 element replace first', () => {
  given(2, [[1, 123], [2, 234], [3, 345]]);
  shouldBe([[1, -1], [2, 234], [3, 345]]);
});

test('2 capacity 3 element replace mid(LRU)', () => {
  given(2, [[1, 123], [2, 234]]);
  getCache(1);
  putCache([[3, 345]]);
  shouldBe([[1, 123], [2, -1], [3, 345]]);
});

test('2 capacity 4 element replace twice', () => {
  given(2, [[1, 123], [2, 234]]);
  getCache(1);
  putCache([[3, 345], [4, 456]]);
  shouldBe([[1, -1], [2, -1], [3, 345], [4, 456]]);
});

test('1 capacity 2 element replace once', () => {
  given(1, [[2, 1]]);
  getCache(2);
  putCache([[3, 2]]);
  shouldBe([[2, -1], [3, 2]]);
});

test('same key should not delete more cache', () => {
  given(2, [[2, 6], [1, 5], [1, 2]]);
  shouldBe([[1, 2], [2, 6]]);
});

test('same key should update latest', () => {
  given(2, [[2, 1], [1, 1], [2, 3], [4, 1]]);
  shouldBe([[1, -1], [2, 3]]);
});

test('LRU if get twice', () => {
  given(2, [[2, 1], [3, 2]]);
  getCache(3);
  getCache(2);
  putCache([[4, 3]]);
  shouldBe([[2, 1], [3, -1], [4, 3]]);
});


