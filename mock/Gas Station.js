function v(n, gas, cost) {
  let start = 0,
    end = 0,
    remainingGas = 0;

  while (start < n) {
    remainingGas += gas[end] - cost[end];

    if (remainingGas < 0) {
      start++;
      end = start;
      remainingGas = 0;
    } else {
      end = (end + 1) % n;
      if (end === start) {
        return start;
      }
    }
  }

  return -1;
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);

  console.log(v(n, arr1, arr2));
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
