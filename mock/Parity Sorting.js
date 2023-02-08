function v(n, arr) {
  arr.sort((a, b) => a - b);
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 1) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  console.log([...arr1, ...arr2].join(" "));
}

function runProgram(input) {
  //Input Taking Here
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
