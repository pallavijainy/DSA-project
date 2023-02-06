let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let row = 0,
  col = 0;
let n = board[0].length * board.length;
for (let i = 0; i < n; i++) {
  col++;
  if (i % board[0].length === 0) {
    row++;
    col = 0;
  }
  console.log(board[row - 1][col]);
}
