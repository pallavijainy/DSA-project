function v(n, k, arr) {
  let l = 0;
  let r = n - 1;
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum == k) {
      return l + " " + r;
    }
    if (sum > k) {
      r--;
    } else {
      l++;
    }
  }
  return -1 + " " + -1;
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let num = input[line++].split(" ").map(Number);
    let n = num[0];
    let k = num[1];
    let arr = input[line++].split(" ").map(Number);
    console.log(v(n, k, arr));
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
