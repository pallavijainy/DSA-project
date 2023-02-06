function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let str2 = input[1].trim();
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str2[i]) console.log(str[i]);
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