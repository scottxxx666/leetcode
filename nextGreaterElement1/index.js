const nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  map.set(nums2[nums2.length - 1], -1);
  stack.push(nums2[nums2.length - 1]);
  for (let i = nums2.length - 2; i >= 0; i--) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1);
    stack.push(nums2[i]);
  }

  const result = [];
  for (let e of nums1) {
    result.push(map.get(e));
  }
  return result;
};
