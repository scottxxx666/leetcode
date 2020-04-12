function selectMax(stones) {
  let maxIndex = 0;
  let secondIndex = -1;
  for (let i = 1; i < stones.length; i++) {
    const target = stones[i];
    const max = stones[maxIndex];
    const second = secondIndex < 0 ? -1 : stones[secondIndex];
    if (target > max) {
      secondIndex = maxIndex;
      maxIndex = i;
    } else if (target > second) {
      secondIndex = i;
    }
  }
  return { maxIndex, secondIndex };
}

module.exports = (stones) => {
  while (1) {
    const { maxIndex, secondIndex } = selectMax(stones);
    if (secondIndex < 0 || stones[secondIndex] <= 0) {
      return stones[maxIndex];
    }
    stones[maxIndex] = Math.abs(stones[maxIndex] - stones[secondIndex]);
    stones[secondIndex] = 0;
  }
};
