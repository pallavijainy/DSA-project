function v(n, nums) {
  let i = 0;
  let j = n - 1;
  let count1 = 1;
  let count2 = 1;
  let sum1 = nums[i];
  let sum2 = nums[j];
  while (i < j - 1) {
    if (sum1 < sum2 * 2) {
      i++;
      count1++;
      sum1 += nums[i];
    } else {
      j--;
      count2++;
      sum2 += nums[j];
    }
  }
  return [count1, count2].join(" ");
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let nums = input[line++].trim().split(" ").map(Number);
    console.log(v(n, nums));
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
