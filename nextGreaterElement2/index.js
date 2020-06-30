const nextGreaterElements = function (nums) {
  const stack = [];
  let result = new Array(nums.length);
  for (let i = (nums.length - 1) * 2; i >= 0; i--) {
    const index = i % nums.length;
    while (stack.length && nums[index] >= stack[stack.length - 1]) {
      stack.pop();
    }
    result[index] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[index]);
  }
  return result;
};
