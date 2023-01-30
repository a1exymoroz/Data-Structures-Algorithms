const lcs = (s1, s2) => {
  const n = s1.length;
  const m = s2.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );

  const p = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => null)
  );

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        p[i][j] = [i - 1, j - 1, s1[i - 1]];
      } else {
        if (dp[i - 1][j] > dp[i][j - 1]) {
          dp[i][j] = dp[i - 1][j];
          p[i][j] = [i - 1, j, ""];
        } else {
          dp[i][j] = dp[i][j - 1];
          p[i][j] = [i, j - 1, ""];
        }
      }
    }
  }

  let cur = p[n][m];
  let ans = "";
  while (cur !== null) {
    ans = cur[2] + ans;
    cur = p[cur[0]][cur[1]];
  }

  return ans;
};
const a1 = "abacaba";
// const a1 = "12345";
const a2 = "abcabc";
// const a2 = "51324";
console.log(lcs(a1, a2));
