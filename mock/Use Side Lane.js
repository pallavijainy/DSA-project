function v(n, arr) {
  let stack = [];
  let ans = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      stack[stack.length - 1] == ans[ans.length - 1] + 1
    ) {
      ans.push(stack.pop());
    }
    if (arr[i] == 1) {
      ans.push(arr[i]);
    } else if (arr[i] == ans[ans.length - 1] + 1) {
      ans.push(arr[i]);
    } else {
      stack.push(arr[i]);
    }
  }
  for (let i = 0; i < stack.length - 1; i++) {
    if (stack[i] < stack[i + 1]) {
      return "no";
    }
  }
  return "yes";
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +(input.length - 1) / 2;
  // console.log(tc)
  let line = 0;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(n,arr)
    console.log(v(n, arr));
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
