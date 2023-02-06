function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  n = n - 80;
  let three = Math.floor(50 / 3);
  let five = Math.floor(100 / 5);
  if (n <= 50) {
    n = Math.floor(n / 3);
  }
  if (n > 50 && n <= 150) {
    n = n - 50;
    n = Math.floor(n / 5);
    n += three;
  }
  if (n > 150) {
    n = n - 150;
    n = Math.floor(n / 10);
    n += five + three;
  }
  console.log(n);
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
 