//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1 
   for(var i=0;i<tc;i++){
       var l = +input[line]
       line++
       var a = input[line].trim().split(" ").map(Number)
       line++
       var b = input[line].trim().split(" ").map(Number)
       line++
       common(l,a,b)
   }
}

function common(l,a,b){
   var count = 0
   var left = 0
   var right = l-1
   while(left<l && right >=0){
       if(a[left]===b[right]){
           left++
           right--
           count++
       }
       if(a[left]>b[right]){
           right--
       }
       if(a[left]<b[right]){
           left++
       }
   }
   console.log(count)
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
 