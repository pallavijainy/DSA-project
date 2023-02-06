function findit(n) {
  let odd = 0,
    even = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0){
        if(n %i == 0)even++;
    }
    else {
        if(n %i == 0)odd++
    }
  }

  if (odd > even) console.log("Odd");
  else if (even > odd) console.log("Even");
  else if (even == odd) console.log("Eq");
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    findit(n);
  }
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
 