function v(str) {
  let i = 0;
  let j = str.length - 1;
  let count = 0;
  while (i < j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      if (str[j] == str[i + 1]) {
        count++;
        i++;
      } else if (str[i] == str[j - 1]) {
        count++;
        j--;
      } else {
        return "NO";
      }
    }
    if (count > 1) {
      return "NO";
    }
  }
  return "YES";
  //  console.log(count)
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line++];
    console.log(v(str));
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
