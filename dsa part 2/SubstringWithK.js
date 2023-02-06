function keepCheck(x, j, obj, str) {
  for (let i = x; i < x + j; i++) {
    count++;
    if (str[i] !== undefined) {
      if (obj[str[i]] == undefined) obj[str[i]] = 1;
      else return false;
    }
  }
  let abc = Object.keys(obj).length;
  return abc === j;
}

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let str = input[1].trim();
  let count = 0;
  for (let i = 0; i < n; i++) {
    let obj = {};
    if (keepCheck(i, k, obj, str)) count++;
  }
  console.log(count);
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
 