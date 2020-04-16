function add(newSet, e) {
  if (e >= 0) {
    newSet.add(e);
  }
}

module.exports = (s) => {
  let set = new Set([0]);
  for (let each of s) {
    if (each === '*') {
      let newSet = new Set();
      for (let e of set) {
        add(newSet, e + 1);
        add(newSet, e);
        add(newSet, e - 1);
      }
      set = newSet;
    } else if (each === '(') {
      let newSet = new Set();
      for (let e of set) {
        add(newSet, e + 1);
      }
      set = newSet;
    } else {
      const newSet = new Set();
      for (let e of set) {
        add(newSet, e - 1);
      }
      set = newSet;
    }
  }
  return [...set].some(e => e === 0);
};
