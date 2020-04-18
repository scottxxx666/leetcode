module.exports = (people) => {
  let orders = people.sort((a, b) => (b[0] - a[0]) * 10 + a[1] - b[1]);
  let result = [];
  for (let each of orders) {
    result.splice(each[1], 0, each);
  }
  return result;
};
