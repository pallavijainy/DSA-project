const findit = (str, x, k) => {
  let obj = {};
  for (let i = x; i < x + k; i++) {
      if(str[i]){
        if(!obj[str[i]])obj[str[i]] = 1;
        else return false;
      }
  }return Object.keys(obj).length === k;
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number), str = input[1].trim(),count = 0;
  for (let i = 0; i < n; i++) if(findit(str, i, k))count++;
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
 