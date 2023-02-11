function v(str) {
  str = str.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (arr[i] == 0 && arr[j] == 0) {
      let temp = str[i];
      str[i] = str[j];
      str[j] = temp;
      i++;
      j--;
    } else if (arr[i] == 1 && arr[j] == 0) {
      i++;
    } else if (arr[i] == 0 && arr[j] == 1) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  console.log(str.join(""));
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line++];
    v(str);
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
