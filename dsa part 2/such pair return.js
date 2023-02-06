//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var x = input[line].trim().split(" ").map(Number)
       var [n,k] = [x[0],x[1]]
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
       console.log(pair(n,k,arr))
   }
}

function pair(n,k,arr){
   
   // method 1 --> Brtute force --> O(n**2)  -->partially accepted
   // for(var i=0;i<n;i++){
   //     for(var j=0;j<n;j++)
   //     if(i!==j){
   //         if(arr[i]+arr[j]===k){
   //             return 1
   //         }
   //     }
   // }
   // return -1
   
   

   // Method 2  --> O(nlogn)  -->Two pointer approach
   // arr = arr.sort()
   arr = arr.sort((a,b)=>{return a-b});
   // console.log(arr)
   var left = 0
   var right = n-1
   while(left<right){
       if(arr[left] + arr[right] === k){
           return 1
       }
       else if(arr[left] + arr[right] < k){
           left++
       }
       else{
           right--
       }
       // console.log("left",  left)
       // console.log("right", right)
   }
   return -1
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
 