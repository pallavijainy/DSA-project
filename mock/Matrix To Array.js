function v(m, n, mat) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr.push(mat[i][j]);
    }
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let num = input[0].trim().split(" ").map(Number);
  let n = num[0];
  let m = num[1];
  let mat = [];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let arr = input[line++].trim().split(" ").map(Number);
    mat.push(arr);
  }
  v(m, n, mat);
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
