const findStock = (array,n)=>{
    let res = [1],stack = [0];
    for (let i = 1; i < n; i++){
        console.log(stack);
        while(stack.length > 0 && array[stack[stack.length - 1]] <= array[i])stack.pop();
        stack.length === 0 ? res.push(i+1) : res.push(i-stack[stack.length - 1] )
        stack.push(i)
    }
    console.log(res.join(" "));
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let n = +input[line++],array = input[line++].trim().split(" ").map(Number);
       findStock(array,n)
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
   