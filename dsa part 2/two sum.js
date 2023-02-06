//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var a = input[line].trim().split(" ").map(Number)
       var [N,T] = [a[0],a[1]]
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
       // find(N,T,arr) 
       target_sum(N,T,arr)
   }
   
}

// Brute Force --> O(n**2)

// function find(N,T,arr){
//     var result = true
//     for(var i=0;i<N-1;i++){
//         if(result===false){
//             break;
//         }
//         for(var j=i+1;j<N;j++){
//             var sum = arr[i] + arr[j]
//             if(sum===T){
//                 console.log(i,j)
//                 result = false
//                 break;
//             }
//         }
//     }
//     if(result){
//         console.log("-1 -1")
//     }
// }


//Two pointer approach --> O(n) as array was already sorted

function target_sum(N,T,arr){
   var result = true
   var left = 0
   var right = N - 1
   var value = arr[left] + arr[right]
   while(left < right){
       if(value<T){
           left++
           value = arr[left] + arr[right]
       }
       else if(value>T){
           right--
           value = arr[left] + arr[right]
       }
       else if(value === T){
           console.log(left,right)
           result = false
           break;
       }
   }
   if(result){
       console.log("-1 -1")
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
 