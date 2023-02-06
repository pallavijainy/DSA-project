//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var n = +input[line]
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
       square(n,arr)
   }
}

function square(n,arr){
   var sq = []
   for(var i=0;i<n;i++){
       sq.push(arr[i]**2)
   }
   for(var i=0;i<n-1;i++){
       for(var j=0;j<n-i-1;j++){
           if(sq[j]>sq[j+1]){
               // console.log(sq[j],sq[j+1])
               swap(sq,j)
               // console.log(sq[j],sq[j+1])
               swap(arr,j)
           }
       }
   }
   // console.log(sq)
   console.log(arr.join(" "))
}



function swap(sq,j){
   var temp = sq[j]
   sq[j] = sq[j+1]
   sq[j+1] = temp
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
 