/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums;
};

KthLargest.prototype.findK = function () {
  let l = 0;
  let r = this.nums.length - 1;
  while (l <= r) {
    const n = select(this.nums, l, r);
    if (n + 1 === this.k) {
      return this.nums[n];
    } else if (n + 1 > this.k) {
      r = n - 1;
    } else {
      l = n + 1;
    }
  }
};

function select(nums, l, r) {
  const index = Math.floor(Math.random() * (r - l)) + l;
  swap(nums, r, index);
  const t = nums[r];
  let bigger = l;
  for (let i = l; i < r; i++) {
    if (nums[i] > t) {
      swap(nums, i, bigger);
      bigger++;
    }
  }
  swap(nums, bigger, r);
  return bigger;
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.push(val);
  return this.findK();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
