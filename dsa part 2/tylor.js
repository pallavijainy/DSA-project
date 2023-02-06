let p =1,f = 1;
function findit(x,n){
    let r;
    if (n == 0)
        return 1;
    r = findit(x, n - 1);
    p = p * x;
    f = f * n;
    return (r + p / f);
}
function runProgram(input) {
   input = input.trim().split('\n')
   let [x,n] = input[0].trim().split(' ').map(Number)
   let res = findit(x,n)
   console.log(res.toFixed(4));
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
   