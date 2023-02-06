let obj = {};
function findit(array, res, current) {
  if (array.length > 0) {
     if(obj[res] === undefined){
       obj[res] = 1
      console.log(res.join(' '));
  }
}
  for (let i = current; i < array.length; i++) {
      res.push(array[i])
      findit(array, res, i + 1)
      res.pop();
  }
}  
function runProgram(input) {
input = input.trim().split('\n');
let n = +input[0]
let array = []
for(let i = 1;i <= n;i++) {
  array.push(i)
}
let current = 0,res = [];
findit(array, res, current);
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
 