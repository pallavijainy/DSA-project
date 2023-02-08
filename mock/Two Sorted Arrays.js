function v(n, acc, desc) {
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i < n && j >= 0) {
    if (acc[i] === desc[j]) {
      count++;
      i++;
      j--;
    } else if (acc[i] < desc[j]) {
      i++;
    } else {
      j--;
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
    let n = +input[line++];
    let acc = input[line++].trim().split(" ").map(Number);
    let desc = input[line++].trim().split(" ").map(Number);

    v(n, acc, desc);
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
