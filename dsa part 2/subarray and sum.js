//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var x = input[0].trim().split(" ").map(Number)
   var [n,k] = [x[0],x[1]]
   var arr = input[1].trim().split(" ").map(Number)
   // subarr(n,k,arr)
   subArrayBetter(n,k,arr)
}

// Brute Force ---> Partly accepted ---> O(n(n+k))

// function subarr(n,k,arr){
//     var maxLength = 0
//     var i = 0
//     while(i<n){
//         var bag = []
//         for(var j=i;j<n;j++){
//             bag.push(arr[j])
//             // console.log(bag)
//             var total = bag.reduce(sum)
//             // console.log(total)
//             if(total%k!==0){
//                 if(maxLength < bag.length){
//                     maxLength = bag.length
//                 }
//             }
//         }
//         i++
//     }
//     // console.log(maxLength)
//     var count = 0
//     for(i=0;i<=n-maxLength;i++){
//         var bag1 = []
//         for(j=i;j<maxLength+i;j++){
//             bag1.push(arr[j])
//         }
//         var total1 = bag1.reduce(sum)
//         // console.log(total1)
//         if(total1%k!==0){
//             count++
//         }
//     }
//     console.log(count)
// }

function sum(num1,num2){
   return (num1+num2)
}

// Efficient Approach
function subArrayBetter(n,k,arr){
   if((arr.reduce(sum) % k) !== 0)
   {
       console.log(1)
   }
   else
   {
       var left = 0
       while(left<n && arr[left]%k === 0)
       {
           left++
       }
       var right = n-1
       while(right>=0 && arr[right]%k === 0)
       {
           right--
       }

       var length = null
       if(n-1-left>right){
           length = n-1-left
       }
       else{
           length = right
       }
       // console.log(length)

       var total = 0,count = 0
       for(i=0;i<length;i++)
       {
           total += arr[i]
       }
       if(total%k !== 0)
       {
           count++
       }
        
       for(i=length;i<n;i++)
       {
           total += arr[i] - arr[i-length]
           if(total%k!==0)
           {
               count++
           }
       }
       console.log(count)
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
   