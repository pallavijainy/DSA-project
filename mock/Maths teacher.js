function v(n, str, str2) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    let k = str[i];
    if (obj[k] === undefined) {
      obj[k] = 1;
    } else {
      obj[k]++;
    }
  }
  let obj2 = {};

  for (let i = 0; i < n; i++) {
    let k = str2[i];
    if (obj2[k] === undefined) {
      obj2[k] = 1;
    } else {
      obj2[k]++;
    }
  }
  let a = [];

  for (let key in obj) {
    a.push(obj[key]);
  }
  let b = [];

  for (let key in obj2) {
    b.push(obj2[key]);
  }
  if (a.length == b.length) {
    console.log("Equivalent");
  } else {
    console.log("Not Equivalent");
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let str = input[line++];
    let str2 = input[line++];
    v(n, str, str2);
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
