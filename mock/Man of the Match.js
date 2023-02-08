function v(n, runs) {
  let viratScore = 0,
    abScore = 0;
  let strike = 1;
  for (let i = 0; i < runs.length; i++) {
    if (strike === 1) {
      abScore += runs[i];
      if (runs[i] === 1 || runs[i] === 3) {
        strike = 0;
      }
    } else {
      viratScore += runs[i];
      if (runs[i] === 1 || runs[i] === 3) {
        strike = 1;
      }
    }

    if (i % 6 === 5) {
      strike = 1 - strike;
    }
  }

  if (viratScore > abScore) {
    return "Virat Kohli";
  } else if (viratScore < abScore) {
    return "AB de Villiers";
  } else {
    return "Tie";
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let runs = input[line++].trim().split(" ").map(Number);
    console.log(v(n, runs));
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
