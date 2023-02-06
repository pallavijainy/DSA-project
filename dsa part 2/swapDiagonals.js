function solve(arr) {
    for (let i = 0; i < arr[0].length; i++) {
        let result = "";
        for (let j = 0; j < arr.length; j++) {
            result += arr[j][i] + " ";
        }
        console.log(result);
    }
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let n = Number(newInput[i]);
        let arr = newInput.splice(i + 1, n);
        arr = arr.map((el) => el.trim().split(" ").map(Number));
        solve(arr);
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
   