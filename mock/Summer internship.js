function v(n, arr) {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 5) {
      five++;
    }
    if (arr[i] == 10) {
      if (five > 0) {
        ten++;
        five--;
      } else {
        return "NO";
      }
    }

    if (arr[i] == 20) {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five = five - 3;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];

  let line = 1;

  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
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
