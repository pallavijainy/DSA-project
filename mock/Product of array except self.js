function v(n, arr) {
  let left = [];
  let right = [];
  let p = 1;
  let q = 1;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      p = 1;
    } else {
      p = p * arr[i - 1];
    }
    right[i] = p;
  }
  //   console.log(left)
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      q = 1;
    } else {
      q = q * arr[i + 1];
    }
    left[i] = q;
  }
  let temp = "";
  for (let i = 0; i < n; i++) {
    temp += left[i] * right[i] + " ";
  }
  console.log(temp);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    v(n, arr);
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
