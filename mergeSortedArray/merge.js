module.exports = function (nums1, m, nums2, n) {
  while (m + n - 1 >= 0) {
    const n1 = m - 1 < 0 ? Number.NEGATIVE_INFINITY : nums1[m - 1];
    const n2 = n - 1 < 0 ? Number.NEGATIVE_INFINITY : nums2[n - 1];
    if (n1 >= n2) {
      nums1[m + n - 1] = nums1[--m];
    } else {
      nums1[m + n - 1] = nums2[--n];
    }
  }
};
