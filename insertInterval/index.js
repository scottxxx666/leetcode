const insert = function (intervals, newInterval) {
  const result = [];
  let [start, end] = newInterval;
  for (let i = 0; i < intervals.length; i++) {
    if (start > intervals[i][1]) {
      result.push(intervals[i]);
    } else if (end < intervals[i][0]) {
      result.push([start, end]);
      [start, end] = intervals[i];
    } else {
      start = Math.min(start, intervals[i][0]);
      end = Math.max(end, intervals[i][1]);
    }
  }

  result.push([start, end]);
  return result;
};

module.exports = insert;
