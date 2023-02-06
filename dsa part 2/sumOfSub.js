const runProgram = (input) => {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let ans = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    ans.push(sum);
  }
  for (let i = 3; i < input.length; i++) {
    let [l, r] = input[i].trim().split(" ").map(Number);
    if (l === 1) {
      console.log(ans[r - 1]);
    } else {
      console.log(ans[r - 1] - ans[l - 1 - 1]);
    }
  }
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
 