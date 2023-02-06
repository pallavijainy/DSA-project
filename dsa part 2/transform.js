function findit(a,b,n){
    for(let i = 0;i< n;i++){
        let res = []
        for(let j = i;j< n;j++){
            if(i < j){
               res.push(a[i] + a[j])
            }
        }
        console.log(res);
    }
}


function runProgram(input) {
   input = input.trim().split('\n')
   let cases = +input[0]
   let line = 1;
   for(let i = 0; i < cases; i++){
       let n = +input[line++]
       let a = input[line++].trim().split(' ').map(Number)
       let b = input[line++].trim().split(" ").map(Number)
       findit(a,b,n)
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
   