function v(n, k, arr) {
  arr.sort((a, b) => a - b);

  let cat = 0;
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i < j) {
    let step = k - arr[j];
    cat += step;
    while (cat >= arr[i] && i < j) {
      count++;
      i++;
    }
    j--;
  }
  console.log(n - count);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let num = input[line++].trim().split(" ").map(Number);
    let k = num[0];
    let n = num[1];
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
