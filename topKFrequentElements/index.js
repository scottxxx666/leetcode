function swap(counts, i, j) {
  const temp = counts[i];
  counts[i] = counts[j];
  counts[j] = temp;
}

function getTop(counts, left, right) {
  const [_, target] = counts[left];
  let i = left;
  let j = right;
  while (i <= j) {
    if (counts[i][1] >= target) {
      i++;
    } else {
      swap(counts, i, j);
      j--;
    }
  }
  swap(counts, left, i - 1);
  return i - 1;
}

module.exports = (nums, k) => {
  const map = new Map();
  for (let each of nums) {
    if (map.has(each)) {
      map.set(each, map.get(each) + 1);
    } else {
      map.set(each, 1);
    }
  }
  const counts = [...map.entries()];
  let left = 0;
  let right = counts.length - 1;
  while (left <= right) {
    const key = getTop(counts, left, right);
    if (key === k - 1) {
      return counts.slice(0, key + 1).map(e => e[0]);
    } else if (key > k - 1) {
      right = key - 1;
    } else {
      left = key + 1;
    }
  }
};
