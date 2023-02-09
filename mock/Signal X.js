function v(n, mat) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        if (mat[i][j] == 0) {
          return "False";
        }
      } else if (i + j == n - 1) {
        if (mat[i][j] == 0) {
          return "False";
        }
      } else {
        if (mat[i][j] != 0) {
          return "False";
        }
      }
    }
    return "True";
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let mat = [];
    for (let j = 0; j < n; j++) {
      let arr = input[line++].trim().split(" ").map(Number);
      mat.push(arr);
    }
    console.log(v(n, mat));
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
