const numJewelsInStones = function (J, S) {
  const jewels = new Set(J);
  return S.reduce((p, c) => jewels.has(c) ? p + 1 : p, 0);
};
