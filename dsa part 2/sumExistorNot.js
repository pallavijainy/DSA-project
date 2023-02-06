function matrix(sum, n) {
  let dp = new Array(sum + 1);

  for (let i = 0; i < sum + 1; i++) {
    dp[i] = new Array(sum + 1);
    for (let j = 0; j < n + 1; j++) {
      dp[i][j] = 0;
    }
  }
  return dp;
}

function findit(set, n, sum) {
  let dp = matrix(sum, n);
  // return dp;
  for (let i = 0; i <= n; i++) dp[0][i] = true;
  for (let i = 1; i <= sum; i++) dp[i][0] = false;
  for (let i = 1; i <= sum; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i][j - 1];
      if (i >= set[j - 1])
        dp[i][j] = dp[i][j] || dp[i - set[j - 1]][j - 1];
    }
  }
  return dp[sum][n];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let sum = +input[2];
  let x = findit(array, n, sum);
  console.log(x);
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
 