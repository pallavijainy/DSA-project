function v(nums, k, n) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined && i - obj[nums[i]] <= k) {
      return "YES";
    }
    obj[nums[i]] = i;
  }
  return "NO";
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let num = input[line++].trim().split(" ").map(Number);
    let n = num[0];
    let k = num[1];
    let nums = input[line++].trim().split(" ").map(Number);
    console.log(v(nums, k, n));
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
