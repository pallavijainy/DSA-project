const findit = (array, n, max, curr, res, flag) => {
  if (res.length > 0) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
      sum += res[i];
    }
    if (sum == max) flag.push(0);
  }
  for (let i = curr; i < n - 1; i++) {
    res.push(array[i]);
    findit(array, n, max, i + 1, res, flag);
    res.pop();
  }
};

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let flag = [];
    let array = input[line++].trim().split(" ").map(Number);
    let max = array.sort((a, b) => a - b).pop();
    findit(array, n, max, 0, [], flag);
    flag.length > 0 ? console.log("Yes") : console.log("No");
  }
}
if (process.env.USER === "sangam") {
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
 