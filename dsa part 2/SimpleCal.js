function runProgram(input) {
  input = input.trim().split("\n");
  let a = input[0].trim().split(" ");
  if (a[1] == "*") console.log(a[0] * a[2]);
  if (a[1] == "+") console.log(a[0] + a[2]);
  if (a[1] == "-") console.log(a[0] - a[2]);
  if (a[1] == "/") console.log(a[0] / a[2]);

  //    console.log();
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
 