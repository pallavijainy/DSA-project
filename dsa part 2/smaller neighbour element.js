//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var n = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
   neigh(n,arr)
}

function neigh(n,arr){
   var stack = []
   var result = []
   for(var i=0;i<n;i++){
       while(stack.length != 0 && stack[stack.length-1] >= arr[i]){
           stack.pop()
           // console.log(stack)
       }
       if(stack.length == 0){
           result.push(-1)
           // console.log(stack)
       }
       else{
           result.push(stack[stack.length-1])
           // console.log(stack)   
       }
       stack.push(arr[i])
   }
   console.log(result.join(" "))
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
 