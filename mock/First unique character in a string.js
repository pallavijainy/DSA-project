function v(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char] == undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  //   console.log(obj)

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == 1) {
      return console.log(i);
      // break;
    }
  }
  return console.log(-1);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line++];
    v(str);
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
