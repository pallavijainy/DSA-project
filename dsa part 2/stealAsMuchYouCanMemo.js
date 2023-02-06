function findit(limit, n, value, weight) {
  let dp = Array(n + 1).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(limit + 1).fill(-1);
  }
  let x = memo(limit, n, value, weight, dp);
  console.log(x);
}
function memo(limit, n, value, weight, dp) {
  if (n == 0 || limit == 0) return 0;
  if (dp[n][limit] != -1) return dp[n][limit];
  if (weight[n - 1] > limit)
    return (dp[n][limit] = memo(limit, n - 1, value, weight, dp));
  else {
    return (dp[n][limit] = max(
      value[n - 1] + memo(limit - weight[n - 1], n - 1, value, weight, dp),
      memo(limit, n - 1, value, weight, dp)
    ));
  }
}
function max(a, b) {
  return a > b ? a : b;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let k = +input[0];
  let n = +input[1];
  let weight = input[3].trim().split(" ").map(Number);
  let value = input[2].trim().split(" ").map(Number);
  findit(k, n, value, weight);
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
 