const towerOfHanoi = (n, i, k) => {
  if (n === 1) {
    console.log(`move disk 1 from pin ${i} to ${k}`);
  } else {
    const tmp = 6 - i - k;
    towerOfHanoi(n - 1, i, tmp);

    console.log(`move disk ${n} from pin ${i} to ${k}`);
    towerOfHanoi(n - 1, tmp, k);
  }
};

// towerOfHanoi(3, 1, 3);

const countTowerOfHanoi = (n) => {
  let count = 0;
  const hanoi = (n, i, k) => {
    if (n === 1) {
      count++;
    } else {
      const tmp = 6 - i - k;
      hanoi(n - 1, i, tmp);
      count++;
      hanoi(n - 1, tmp, k);
    }
  };
  hanoi(n, 1, 2);
  return count;
};

const countTowerOfHanoi2 = (n) => {
  if (n === 0) return 0;

  // count(n-1) + 1 + count(n-1)
  return 2 * countTowerOfHanoi2(n - 1) + 1;
};

console.log(countTowerOfHanoi2(50));
