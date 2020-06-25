const minFlips = function (mat) {
  const queue = [mat];
  const visited = new Set([JSON.stringify(mat)]);
  let steps = 0;
  const zero = [];
  for (let i = 0; i < mat.length; i++) {
    zero.push(new Array(mat[0].length).fill(0));
  }

  while (queue.length !== 0) {
    for (let z = queue.length - 1; z >= 0; z--) {
      const target = queue.shift();
      if (JSON.stringify(target) === JSON.stringify(zero)) {
        return steps;
      }

      for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
          const direction = [
            [0, 0],
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ];
          const temp = JSON.parse(JSON.stringify(target));
          for (let d = 0; d < direction.length; d++) {
            flip(temp, i + direction[d][0], j + direction[d][1]);
          }
          if (!visited.has(JSON.stringify(temp))) {
            queue.push(temp);
            visited.add(JSON.stringify(temp));
          }
        }
      }
    }
    steps++;
  }
  return -1;
};

const flip = (target, i, j) => {
  if (i < 0 || j < 0 || i >= target.length || j >= target[0].length) {
    return;
  }
  target[i][j] = target[i][j] ^ 1;
};

module.exports = minFlips;
