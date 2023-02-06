const prime = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) count++;
  }
  return count == 2;
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let sum = 0;
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prime(j - i)) {
        sum += Math.abs(array[i] - array[j]);
      }
    }
  }
  console.log(sum);
};
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
 