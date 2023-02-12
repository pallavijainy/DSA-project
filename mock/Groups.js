function v(arr) {
  let n = arr.length;
  // console.log(n)
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == "1") {
      count++;

      while (i < n && arr[i] == "1") {
        i++;
      }
    }
  }
  console.log(count);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let arr = input[line++].trim().split("").map(Number);
    v(arr);
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
