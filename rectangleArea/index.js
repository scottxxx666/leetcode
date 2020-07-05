var computeArea = function (A, B, C, D, E, F, G, H) {
  const area1 = (C - A) * (D - B);
  const area2 = (G - E) * (H - F);
  const overlap = Math.max((Math.min(C, G) - Math.max(A, E)), 0)
    * Math.max((Math.min(D, H) - Math.max(B, F)), 0);
  return area1 + area2 - overlap;
};
