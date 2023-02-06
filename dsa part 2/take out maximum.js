//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var a = input[0].trim().split(" ").map(Number)
   var [n,k] = [a[0],a[1]]
   var arr = input[1].trim().split(" ").map(Number)
   find(n,k,arr)
}

function find(n,k,arr){
   
   //Brute Force
   
   // var result = null
   // for(var i=0;i<n;i++){
   //     var sum = null
   //     for(var j=i;j<k+i;j++){
   //         sum += arr[j]
   //     }
   //     if(sum>result){
   //         result = sum;
   //     }
   // }
   // console.log(result)
   
   
   var sum =0 
   for(var i=0;i<k;i++){
       sum += arr[i]
   }
   var result = sum
   // console.log(sum)
   for(var j=k;j<n;j++){
       var diff = arr[j] - arr[j-k]
       var sum = sum + diff
       if(result < sum){
           result = sum
       }
   }
   console.log(result)
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
 