const wall = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
];

const leastBricks = (wall) => {
  const map = {};
  const max = wall.reduce((acu, cur) => {
    let sum = 0;

    for (let index = 0; index < cur.length - 1; index++) {
      sum += cur[index];
      map[sum] = map[sum] ? map[sum] + 1 : 1;
      acu = Math.max(map[sum], acu);
    }
    return acu;
  }, 0);

  return wall.length - max;
};

console.log(leastBricks(wall));
