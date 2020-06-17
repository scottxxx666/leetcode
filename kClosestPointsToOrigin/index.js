/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kCloset = function (points, K) {
  const distances = [];
  for (let [x, y] of points) {
    distances.push({ distance: x ** 2 + y ** 2, points: [x, y] });
  }

  function findKth() {
    let start = 0;
    let end = points.length - 1;
    while (start < end) {
      const temp = sort(start, end);
      if (temp === K) {
        return;
      } else if (temp < K) {
        start = temp;
      } else {
        end = temp - 2;
      }
    }
  }

  function sort(start, end) {
    const pivot = distances[end];
    let smaller = start;
    for (let i = start; i <= end - 1; i++) {
      if (distances[i].distance < pivot.distance) {
        swap(i, smaller);
        smaller++;
      }
    }
    swap(end, smaller);
    return smaller + 1;
  }

  function swap(a, b) {
    const temp = distances[a];
    distances[a] = distances[b];
    distances[b] = temp;
  }

  findKth();
  return distances.slice(0, K).map(e => e.points);
};

module.exports = kCloset;

