const hIndex = function (citations) {
  let start = 0;
  let end = citations.length - 1;
  let max = 0;
  while (start <= end) {
    const pivot = Math.floor((start + end) / 2);
    const h = citations.length - pivot;
    if (citations[pivot] >= h) {
      max = Math.max(max, h);
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }
  return max;
};

module.exports = hIndex;
