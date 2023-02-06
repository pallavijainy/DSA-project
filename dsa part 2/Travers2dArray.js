function runProgram(input) {
  input = input.trim().split("\n");
  let [r, c] = input[0].trim().split(" ").map(Number);
  let mat = [],
    res = "";
  for (let i = 1; i <= r; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  for (let i = c - 1; i >= 0; i--) {
    for (let j = 0; j < r; j++) {
      res += mat[j][i] + " ";
    }
  }
  console.log(res);
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
 