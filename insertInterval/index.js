const insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let [start, end] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (end >= intervals[i][0]) {
      end = Math.max(end, intervals[i][1]);
    } else {
      result.push([start, end]);
      [start, end] = intervals[i];
    }
  }

  result.push([start, end]);
  return result;
};

module.exports = insert;
