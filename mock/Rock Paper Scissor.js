function v(n, s, t) {
  let sScore = 0;
  let tScore = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "r" && t[i] === "s") {
      sScore++;
    } else if (s[i] === "p" && t[i] === "r") {
      sScore++;
    } else if (s[i] === "s" && t[i] === "p") {
      sScore++;
    } else if (t[i] === "r" && s[i] === "s") {
      tScore++;
    } else if (t[i] === "p" && s[i] === "r") {
      tScore++;
    } else if (t[i] === "s" && s[i] === "p") {
      tScore++;
    }
  }

  if (sScore > tScore) {
    return "First";
  } else if (tScore > sScore) {
    return "Second";
  } else {
    return "Draw";
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let n = +input[0];
  let s = input[1];
  let t = input[2];
  console.log(v(n, s, t));
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
