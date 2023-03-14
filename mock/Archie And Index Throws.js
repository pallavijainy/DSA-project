function v(n, arr) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    let j = i + arr[i];
    while (j < n) {
      sum += arr[j];
      j += arr[j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  console.log(max);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  v(n, arr);
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
