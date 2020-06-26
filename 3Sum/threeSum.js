module.exports = function (nums) {
  nums.sort((a, b) => a - b);

  const solution = [];
  for (let i = 0; i < nums.length - 2; i++) {
    while (i > 0 && nums[i] === nums[i - 1]) {
      i++;
    }
    const target = 0 - nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) {
        solution.push([nums[i], nums[l], nums[r]]);
        r--;
        l++;
        while (nums[r] === nums[r + 1]) {
          r--;
        }
        while (nums[l] === nums[l - 1]) {
          l++;
        }
      } else if (sum > target) {
        r--;
      } else {
        l++;
      }
    }
  }
  return solution;
};

