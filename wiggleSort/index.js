function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function partition(nums, start, end) {
  const target = nums[start];
  let i = 0;
  let j = end;
  while (i <= j) {
    if (nums[i] < target) {
      swap(nums, i, j);
      j--;
    } else {
      i++;
    }
  }
  swap(nums, start, j);
  return j;
}

function findMidTh(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const n = partition(nums, i, j);
    if (n === target) {
      return n;
    } else if (n > target) {
      j = n - 1;
    } else {
      i = n + 1;
    }
  }
  return j + 1;
}

function newIndex(nums, i) {
  return (i * 2 + 1) % (nums.length | 1);
}

module.exports = (nums) => {
  let mid = findMidTh(nums, Math.floor(nums.length / 2));
  let left = 0;
  let right = nums.length - 1;
  let i = 0;
  const target = nums[mid];
  while (i <= right) {
    const key = newIndex(nums, i);
    if (nums[key] > target) {
      swap(nums, key, newIndex(nums, left));
      left++;
      i++;
    } else if (nums[key] === target) {
      i++;
    } else {
      swap(nums, key, newIndex(nums, right));
      right--;
    }
  }
};
