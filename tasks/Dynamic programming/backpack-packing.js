const backpackPacking = (scores, weights, capacity) => {
  const F = Array.from({ length: scores.length + 1 }, () =>
    Array.from({ length: capacity + 1 }, () => 0)
  );

  for (let i = 1; i < scores.length + 1; i++) {
    for (let j = 1; j < capacity + 1; j++) {
      const curWeight = weights[i - 1];
      const curPrice = scores[i - 1];
      if (j >= curWeight) {
        F[i][j] = Math.max(F[i - 1][j], F[i - 1][j - curWeight] + curPrice);
      } else {
        F[i][j] = F[i - 1][j];
      }
    }
  }
  return F[scores.length][capacity];
};

const scores = [15, 10, 9, 5];
const weights = [1, 5, 3, 4];
const capacity = 8;
console.log(backpackPacking(scores, weights, capacity));
