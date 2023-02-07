function v(n, arr) {
  let index = [];
  for (let i = 1; i <= n; i++) {
    index.push(i);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        let temp1 = index[j];
        index[j] = index[j + 1];
        index[j + 1] = temp1;
      }
    }
  }
  let shot = 1;
  for (let i = 1; i < n; i++) {
    shot += arr[i] * i + 1;
  }
  console.log(shot);
  console.log(index.join(" "));
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    v(n, arr);
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
