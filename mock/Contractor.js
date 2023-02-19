function pal(n, arrival, dispature) {
  let ans = [];
  ans.push(dispature[0] - arrival[0]);

  let i = 1;
  let j = 0;
  while (i < n) {
    if (arrival[i] >= dispature[j]) {
      ans.push(dispature[i] - arrival[i]);
      j++;
      i++;
    } else {
      ans.push(dispature[i] - dispature[j]);
      i++;
      j++;
    }
  }
  console.log(ans.join(" "));
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");

  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arrival = input[line++].trim().split(" ").map(Number);
    let dispature = input[line++].trim().split(" ").map(Number);
    pal(n, arrival, dispature);
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
