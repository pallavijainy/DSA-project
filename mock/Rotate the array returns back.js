function v(n, k, arr) {
  let p = k % n;
  let ans = [];
  for (let i = n - p; i < n; i++) {
    ans.push(arr[i]);
  }
  for (let i = 0; i < n - p; i++) {
    ans.push(arr[i]);
  }
  console.log(ans.join(" "));
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
    let arr = input[line++].trim().split(" ").map(Number);
    v(n, k, arr);
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
