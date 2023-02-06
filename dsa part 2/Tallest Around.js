function tallest(arr){
    var M = 0;

    for(var i =0 ; i < arr.length; i++){
        if(arr[i] > M){
            M = arr[i];
        }
    }
    return M;
}

// console.log(tallest([1,2,3,5]));

function tallestAro(N, K, arr){
// console.log(N,K,arr);
    var str = "";
for(var i = 0; i < N; i++){
    var queue = [];
    
    for(var j = i; j < (i+K) && j < N; j++){
        
        queue.push(arr[j]);
    }
    if (queue.length == K) {
        str += tallest(queue) + " ";
        
    }
    
}
console.log(str)

}

function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
   var line = 1;

   for(var i = 0; i < testCases; i++){
       var arr1 = input[line].trim().split(" ").map(Number);
        line++;
       var arr = input[line].trim().split(" ").map(Number);
line++;
       var N = arr1[0];
       var K = arr1[1];

       tallestAro(N,K,arr);
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
   