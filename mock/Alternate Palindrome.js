function v(n, str) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    let k = str[i];
    if (obj[k] == undefined) {
      obj[k] = 1;
    } else {
      obj[k]++;
    }
  }
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 != 0) {
      count++;
    }
  }
  if (count == 1 || count == 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let str = input[line++];
    v(n, str);
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
