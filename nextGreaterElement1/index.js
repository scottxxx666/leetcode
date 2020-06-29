const nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  map.set(nums2[nums2.length - 1], -1);
  for (let i = nums2.length - 2; i >= 0; i--) {
    let nextGreater = nums2[i + 1];
    while (nums2[i] > nextGreater && nextGreater !== -1) {
      nextGreater = map.get(nextGreater);
    }
    map.set(nums2[i], nextGreater);
  }

  const result = [];
  for (let e of nums1) {
    result.push(map.get(e));
  }
  return result;
};
