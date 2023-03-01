function v(a, n, k) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < k; i++) {
    current += a[i];
  }
  max = current;

  for (let i = k; i < n; i++) {
    current = current + a[i] - a[i - k];
    max = Math.max(max, current);
  }

  return max;
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let num = input[line++].trim().split(" ").map(Number);
    let n = num[0];
    let k = num[1];
    let a = input[line++].trim().split(" ").map(Number);
    console.log(v(a, n, k));
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
