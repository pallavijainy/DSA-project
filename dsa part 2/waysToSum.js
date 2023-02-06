function findit(n,dp) {
  if (n == 0) return 1;
  if (n < 0) return 0;
  if(dp[n] != -1)return dp[n];
  return dp[n] = findit(n - 1,dp) + findit(n - 3,dp) + findit(n - 5,dp);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
  let n = +input[0];
  let dp = Array(n + 1).fill(-1)
   console.log(findit(n,dp));
   
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
   