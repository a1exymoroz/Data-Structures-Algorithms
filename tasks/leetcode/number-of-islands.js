const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

const numIslands = (grid) => {
  let islands = 0;
  let rowsLength = grid.length;
  if (rowsLength === 0) return 0;
  let colsLength = grid[0].length;

  const setPassedPath = (grid, rowIndex, colIndex) => {
    grid[rowIndex][colIndex] = '5';

    console.log(rowIndex);
    console.log(colIndex);

    if (grid[rowIndex][colIndex + 1] === '1') setPassedPath(grid, rowIndex, colIndex + 1);
    if (grid[rowIndex][colIndex - 1] === '1') setPassedPath(grid, rowIndex, colIndex - 1);
    if (grid[rowIndex + 1] && grid[rowIndex + 1][colIndex] === '1') setPassedPath(grid, rowIndex + 1, colIndex);
    if (grid[rowIndex - 1] && grid[rowIndex - 1][colIndex] === '1') setPassedPath(grid, rowIndex - 1, colIndex);
  };

  for (let row = 0; row < rowsLength; row++) {
    for (let col = 0; col < colsLength; col++) {
      if (grid[row][col] === '1') {
        islands++;
        setPassedPath(grid, row, col);
      }
    }
  }

  return islands;
};

console.log(numIslands(grid2));
