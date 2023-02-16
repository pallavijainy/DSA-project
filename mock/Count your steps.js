function v(num) {
  let count = 0;

  while (num > 1) {
    if (num % 2 == 0) {
      num = num / 2;
      count++;
    } else if (num % 3 == 0) {
      num = (2 * num) / 3;
      count++;
    } else if (num % 5 == 0) {
      num = (4 * num) / 5;
      count++;
    } else {
      console.log(-1);
      return;
    }
  }

  console.log(count);
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let num = +input[line++];
    v(num);
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
