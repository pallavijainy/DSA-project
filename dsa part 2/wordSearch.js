let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCB";
let obj = {};
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    if (!obj[board[i][j]]) obj[board[i][j]] = 1;
    else obj[board[i][j]]++;
  }
}
let res = {};
for (let i = 0; i < word.length; i++) {
  if (!res[word[i]]) res[word[i]] = 1;
  else res[word[i]]++;
}
let boardKey = Object.keys(obj);
let boardValue = Object.values(obj);
let resKey = Object.keys(res);
let resValue = Object.values(res);
let count = 0;
for (let i = 0; i < resKey.length; i++) {
  for (let j = 0; j < boardKey.length; j++) {
    if (resKey[i] == boardKey[j]) {
      if (resValue[i] <= boardValue[j]) count += resValue[i];
      else return false;
    }
  }
}

console.log(count);
