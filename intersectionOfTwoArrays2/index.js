module.exports = (nums1, nums2) => {
  const map = new Map();
  for (let each of nums1) {
    if (map.has(each)) {
      map.set(each, map.get(each) + 1);
    } else {
      map.set(each, 1);
    }
  }
  const result = [];
  for (let each of nums2) {
    if (!map.has(each)) {
      continue;
    }
    result.push(each);
    const count = map.get(each);
    if (count === 1) {
      map.delete(each);
    } else {
      map.set(each, count - 1);
    }
  }
  return result;
};
