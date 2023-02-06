//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var n = input[0]
   var arr = input[1].trim().split(" ").map(Number)
   game(n,arr)
}

function game(n,arr){
   var count = 0
   var arr1 = [arr[0]]
   // console.log(arr1)
   for(var i=0;i<n;i++){
       if(arr[i]<=arr1[arr1.length-1]){
           arr1.pop()
           arr1.push(arr[i])
           count++
           // console.log(arr1)
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
 