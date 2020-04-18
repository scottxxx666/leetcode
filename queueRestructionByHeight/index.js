module.exports = (people) => {
  let orders = people.sort((a, b) => (a[1] - b[1]) * 10 + b[0] - a[0]);
  let result = [];
  for (let each of orders) {
    let count = 0;
    let i = 0;
    while (count < each[1]) {
      if (result[i][0] >= each[0]) {
        count++;
      }
      i++;
    }
    result = [...result.slice(0, i), each, ...result.slice(i, result.length)];
  }
  return result;
};
