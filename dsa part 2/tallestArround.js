const findit = (array, n, k) => {
  let res = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    let max = 0;
    for (let j = 0; j < k; j++) {
      if (array[i + count] !== undefined) {
        max = Math.max(max, array[i + count]);
        count++;
      }
    }
    if (count === k) res.push(max);
  }
  console.log(res.join(" "));
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n, k);
  }
};
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
 