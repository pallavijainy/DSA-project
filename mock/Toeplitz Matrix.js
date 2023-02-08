function v(m, n, matrix) {
  let flag = true;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        flag = false;
      }
    }
  }
  if (flag) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let num = input[line++].trim().split(" ").map(Number);
    let n = num[0];
    let m = num[1];
    let matrix = [];
    for (let i = 0; i < n; i++) {
      let arr = input[line++].trim().split(" ").map(Number);

      matrix.push(arr);
    }
    v(m, n, matrix);
  }
}
if (process.env.USER === "") {
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
