function getKey(str) {
  return str.split('').reduce((prev, current) => {
    const key = current.codePointAt(0) - 'a'.codePointAt(0);
    prev[key]++;
    return prev;
  }, new Array(26).fill(0)).join();
}

function groupAnagrams(strs) {
  let map = new Map();
  for (let str of strs) {
    const key = getKey(str);
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return [...map.values()];
}

module.exports = groupAnagrams;
