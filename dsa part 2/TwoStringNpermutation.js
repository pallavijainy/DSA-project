const runProgram = (input)=> {
  input = input.trim().split('\n')
   let str1 = input[0].trim().split("").sort().join("")
   let str2 = input[1].trim().split("").sort().join("")
   console.log(str1 === str2 ? "Yes" : "No");
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
   