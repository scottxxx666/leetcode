const MinStack = require('./minStack');

let minStack;

beforeEach(() => {
  minStack = new MinStack();
});

test('1 element top/pop', () => {
  minStack.push(1);
  expect(minStack.top()).toEqual(1);
  expect(minStack.pop()).toEqual(1);
});

test('2 element top/pop', () => {
  minStack.push(1);
  minStack.push(2);
  expect(minStack.top()).toEqual(2);
  expect(minStack.pop()).toEqual(2);
  expect(minStack.top()).toEqual(1);
  expect(minStack.pop()).toEqual(1);
});

test('3 element top/pop', () => {
  minStack.push(1);
  minStack.push(2);
  minStack.push(3);
  expect(minStack.top()).toEqual(3);
  expect(minStack.pop()).toEqual(3);
  expect(minStack.top()).toEqual(2);
  expect(minStack.pop()).toEqual(2);
  expect(minStack.top()).toEqual(1);
  expect(minStack.pop()).toEqual(1);
});

test('3 element with duplicate top/pop', () => {
  minStack.push(1);
  minStack.push(2);
  minStack.push(2);
  expect(minStack.top()).toEqual(2);
  expect(minStack.pop()).toEqual(2);
  expect(minStack.top()).toEqual(2);
  expect(minStack.pop()).toEqual(2);
  expect(minStack.top()).toEqual(1);
  expect(minStack.pop()).toEqual(1);
});

test('3 element with duplicate top/pop', () => {
  minStack.push(1);
  minStack.push(1);
  minStack.push(2);
  expect(minStack.top()).toEqual(2);
  expect(minStack.pop()).toEqual(2);
  expect(minStack.top()).toEqual(1);
  expect(minStack.pop()).toEqual(1);
  expect(minStack.top()).toEqual(1);
  expect(minStack.pop()).toEqual(1);
});

test('1 element getMin', () => {
  minStack.push(1);
  expect(minStack.getMin()).toEqual(1);
});

test('2 element getMin (min in end)', () => {
  minStack.push(1);
  minStack.push(0);
  expect(minStack.getMin()).toEqual(0);
  minStack.pop();
  expect(minStack.getMin()).toEqual(1);
});

test('2 element getMin 2 (min in first)', () => {
  minStack.push(1);
  minStack.push(2);
  expect(minStack.getMin()).toEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toEqual(1);
});

test('3 element getMin (min first)', () => {
  minStack.push(1);
  minStack.push(3);
  minStack.push(2);
  expect(minStack.getMin()).toEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toEqual(1);
});

test('4 element getMin (pop 2 same value min)', () => {
  minStack.push(2);
  minStack.push(1);
  minStack.push(1);
  expect(minStack.getMin()).toEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toEqual(1);
  minStack.pop();
  expect(minStack.getMin()).toEqual(2);
});

