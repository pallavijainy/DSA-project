//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var n = +input[0]
   var arr = input[1].trim().split("")

       func(n,arr)
}

function func(n,arr){
   var x = 0
   var y = 0
   for(var i=0;i<n;i++){
       if(arr[i]==="u"){
           x++
       }
       else if(arr[i]==="d"){
           x--
       }
       else if(arr[i]==="r"){
           y++
       }
       else if(arr[i]==="l"){
           y--
       }
   }
   console.log(x,y)
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
 