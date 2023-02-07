function v(n, arr) {
  let left = [];
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      left[i] = -1;
    } else {
      left[i] = stack[stack.length - 1] + 1;
    }
    stack.push(i);
  }

  let right = [];
  let stack2 = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack2.length > 0 && arr[i] >= arr[stack2[stack2.length - 1]]) {
      stack2.pop();
    }
    if (stack2.length === 0) {
      right[i] = -1;
    } else {
      right[i] = stack2[stack2.length - 1] + 1;
    }
    stack2.push(i);
  }
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(left[i] + right[i]);
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  v(n, arr);
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
