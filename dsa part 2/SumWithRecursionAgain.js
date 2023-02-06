function findit(array,n,j,sum){
    if(j == n-1) return sum

sum += Math.abs(array[j] - array[j+1])
 return findit(array,n,j+1,sum)
}


function runProgram(input) {
input = input.trim().split('\n')
let cases = +input[0]
let line = 1;
let sum = 0;
let j = 0;
for(let i =0;i < cases;i++){
    let n = +input[line++]
    let array = input[line++].trim().split(' ').map(Number)
    console.log(findit(array,n,j,sum));
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