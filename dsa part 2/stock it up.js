//Enter code here//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var week= +input[0]
   var arr = input[1].trim().split(" ").map(Number)
   find(week,arr)
}

function find(week,arr){
   var price = [550,240,84,159,80,160,252]
   var sum = 0
   for(var i=0;i<7;i++){
       if(arr[i]===1){
           sum += price[i]
       }
   }
   console.log(sum*week)
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
 