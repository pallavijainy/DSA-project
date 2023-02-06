function findit(mat, n) {
  let left = 0,
    top = 0,
    right = n - 1,
    bottom = n - 1;
  let str = "";
  let count = 0,
    total = n * n;
  while (count < total) {
    for (let i = left; i <= right; i++) {
      str += mat[top][i] + " ";
    }
    top++;
    count++;
    for (let i = top; i <= bottom; i++) {
      str += mat[i][right] + " ";
    }
    right--;
    count++;
    for (let i = right; i >= left; i--) {
      str += mat[bottom][i] + " ";
    }
    bottom--, count++;
    for (let i = bottom; i >= top; i--) {
      str += mat[i][left] + " ";
    }
    left++, count++;
  }
  console.log(str);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0];
  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  findit(mat, n);
}
if (process.env.USER === "sangam") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
 