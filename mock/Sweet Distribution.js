function v(n) {
  // console.log(n-1)
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (n - i > 0) {
      count++;
    }
  }
  console.log(count);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  v(n);
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
