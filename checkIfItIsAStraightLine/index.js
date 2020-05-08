module.exports = function (coordinates) {
  let diff = minus(coordinates[1], coordinates[0]);
  for (let i = 2; i < coordinates.length; i++) {
    if (!isProduct(minus(coordinates[i], coordinates[0]), diff)) {
      return false;
    }
  }
  return true;
};

function minus(x, y) {
  return [x[0] - y[0], x[1] - y[1]];
}

function isProduct(x, y) {
  return x[0] * y[1] === x[1] * y[0];
}
