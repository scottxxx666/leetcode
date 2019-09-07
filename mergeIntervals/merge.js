function merge(intervals) {
  if (intervals.length === 0) {
    return intervals;
  }
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  let result = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    let begin = sorted[i][0];
    let end = sorted[i][1];
    const last = result[(result.length - 1)];
    if ((begin < last[0] && end < last[0]) || (begin > last[1] && end > last[1])) {
      result.push([begin, end]);
    } else {
      begin = Math.min(begin, last[0]);
      end = Math.max(end, last[1]);
      result[result.length - 1] = [begin, end];
    }
  }
  return result;
}

module.exports = merge;
