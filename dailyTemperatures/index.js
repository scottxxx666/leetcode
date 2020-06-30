const dailyTemperatures = function (T) {
  const stack = [];
  const indices = new Map();
  const result = new Array(T);
  for (let i = T.length - 1; i >= 0; i--) {
    indices.set(T[i], i);
    while (stack.length > 0 && T[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    result[i] = stack.length ? indices.get(stack[stack.length - 1]) - i : 0;
    stack.push(T[i]);
  }
  return result;
};
