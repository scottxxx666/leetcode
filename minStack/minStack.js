let stack;
let min;

const MinStack = function () {
  stack = [];
  min = [];
};

MinStack.prototype.push = (x) => {
  if (min.length === 0 || x <= min[min.length - 1]) {
    min.push(x);
  }
  stack.push(x);
};

MinStack.prototype.pop = () => {
  const pop = stack.pop();
  if (pop === min[min.length - 1]) {
    min.pop();
  }
  return pop;
};

MinStack.prototype.top = () => {
  return stack[stack.length - 1];
};

MinStack.prototype.getMin = () => {
  return min[min.length - 1];
};

module.exports = MinStack;