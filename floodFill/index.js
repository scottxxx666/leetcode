const floodFill = function (image, sr, sc, newColor) {
  function fill(x, y) {
    if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] !== origin) {
      return;
    }
    image[x][y] = newColor;
    fill(x - 1, y);
    fill(x + 1, y);
    fill(x, y - 1);
    fill(x, y + 1);
  }

  const origin = image[sr][sc];
  if (origin === newColor) {
    return image;
  }

  fill(sr, sc);
  return image;
};

module.exports = floodFill;
