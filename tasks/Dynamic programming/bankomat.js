const bankomat = (K) => {
  const A = [1, 50, 90];
  const F = [];
  F[0] = 0;

  for (let k = 1; k < K + 1; k++) {
    F[k] = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < A.length; i++) {
      if (k - A[i] >= 0 && F[k - A[i]] < F[k]) {
        debugger;

        F[k] = F[k - A[i]];
      }
    }
    F[k] += 1;
  }

  const ans = [];
  let k = K;
  while (k !== 0) {
    for (let i = 0; i < A.length; i++) {
      if (k - A[i] >= 0 && F[k] === F[k - A[i]] + 1) {
        ans.push(A[i]);
        k -= A[i];
      }
    }
  }
  return ans;
};

const bankomat1 = (money) => {
  const coins = [1, 10, 15];
  const minCoins = [];
  minCoins[0] = 0;

  for (let sum = 1; sum <= money; sum++) {
    minCoins[sum] = Number.MAX_SAFE_INTEGER;
    for (let coin = 0; coin < coins.length; coin++) {
      if (
        sum >= coins[coin] &&
        minCoins[sum] > minCoins[sum - coins[coin]] + 1
      ) {
        minCoins[sum] = minCoins[sum - coins[coin]] + 1;
      }
    }
  }
  return minCoins;
};

console.dir(bankomat(100));
// console.dir(bankomat1(20));
