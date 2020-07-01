const circularArrayLoop = function (nums) {
  function next(i) {
    const n = nums[i];
    const nextI = nextIndex(i)
    if (n * nums[nextI] <= 0) {
      return -1;
    }
    if (i === nextI) {
      return -1;
    }
    return nextI;
  }

  for (let i = 0; i < nums.length; i++) {
    if (isCycle(i)) {
      return true;
    }

    while (nums[i]*nums[nextIndex(i)] > 0) {
      const nextI = nextIndex(i);
      nums[i]=0;
      i = nextI;
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

  function nextIndex(i) {
    return (i + nums[i] % nums.length + nums.length) % nums.length;
  }
};
