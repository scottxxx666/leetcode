function merge(intervals) {
  if (intervals.length === 0) {
    return intervals;
  }
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let begin = intervals[i][0];
    let end = intervals[i][1];
    const newResult = [];
    for (let j = 0; j < result.length; j++) {
      if ((begin < result[j][0] && end < result[j][0]) || (begin > result[j][1] && end > result[j][1])) {
        newResult.push([result[j][0], result[j][1]]);
      } else {
        begin = Math.min(begin, result[j][0]);
        end = Math.max(end, result[j][1]);
      }
    }
    newResult.push([begin, end]);
    result = newResult;
  }
  return result;
}

module.exports = merge;
