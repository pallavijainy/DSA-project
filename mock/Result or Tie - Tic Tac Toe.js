function v(mat) {
  //   console.log(mat)
  for (let i = 0; i < 3; i++) {
    if (mat[0][i] == "x" && mat[1][i] == "x" && mat[2][i] == "x") {
      return "x";
    }
    if (mat[i][0] == "x" && mat[i][1] == "x" && mat[i][2] == "x") {
      return "x";
    }
    if (mat[0][i] == "o" && mat[1][i] == "o" && mat[2][i] == "o") {
      return "o";
    }
    if (mat[i][0] == "o" && mat[i][1] == "o" && mat[i][2] == "o") {
      return "o";
    }
  }

  if (mat[0][0] == "x" && mat[1][1] == "x" && mat[2][2] == "x") {
    return "x";
  }
  if (mat[0][2] == "x" && mat[1][1] == "x" && mat[2][0] == "x") {
    return "x";
  }

  if (mat[0][0] == "o" && mat[1][1] == "o" && mat[2][2] == "o") {
    return "o";
  }
  if (mat[0][2] == "o" && mat[1][1] == "o" && mat[2][0] == "o") {
    return "o";
  } else {
    return "Tie";
  }
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let mat = [];
  for (let i = 0; i < 3; i++) {
    let arr = input[i].trim().split(" ");
    mat.push(arr);
  }
  console.log(v(mat));
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
