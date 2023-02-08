function v(n, arr) {
  let i = n - 1;

  while (i >= 0) {
    if (arr[i] !== 9) {
      arr[i] = arr[i] + 1;
      break;
    } else {
      while (arr[i] == 9 && i >= 0) {
        arr[i] = 0;

        i--;
      }
    }
  }
  if (arr[0] == 0) {
    arr[0] = 1;
    arr[n] = 0;
  }
  return arr.join(" ");
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(v(n, arr));
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
