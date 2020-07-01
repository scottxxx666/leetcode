const circularArrayLoop = function (nums) {
  function next(i) {
    const n = nums[i];
    const nextIndex = (i + n % nums.length + nums.length) % nums.length;
    if (n * nums[nextIndex] <= 0) {
      return -1;
    }
    if (i === nextIndex) {
      return -1;
    }
    return nextIndex;
  }

  for (let i = 0; i < nums.length; i++) {
    if (isCycle(i)) {
      return true;
    }
  }
  return false;

  function isCycle(start) {
    let slow = start;
    let fast = start;
    do {
      slow = next(slow);
      fast = next(fast);
      if (fast !== -1) {
        fast = next(fast);
      }
    } while (slow !== fast && slow !== -1 && fast !== -1);
    return fast !== -1 && slow !== -1;
  }
};
