function swap(nums, i, j) {
  nums[i] += nums[j];
  nums[j] = nums[i] - nums[j];
  nums[i] -= nums[j];
}

function removeElement(nums, val) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === val) {
      swap(nums, i, j);
      j--;
    } else {
      i++;
    }
  }
  return i;
}

module.exports = removeElement;
