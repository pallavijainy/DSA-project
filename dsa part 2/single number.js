//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=+input[line++];
        var arr=input[line++].trim().split(" ").map(Number);
        // console.log(arr)
        SingleNumber(n,arr);
    }
    // console.log(input)
}
function SingleNumber(n,arr){
   var obj={};
   for(var i=0;i<arr.length;i++){
       var char=arr[i];
       if(obj[char]===undefined){
           obj[char]=1;
       }
       else{
           obj[char]+=1;
       }
   }
   for(var i in obj){
       if(obj[i]===1){
           console.log(i);
       }
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
 