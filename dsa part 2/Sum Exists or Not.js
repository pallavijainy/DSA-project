//Enter code here
function runProgram(input){
    input = input.trim().split("\n")
    var t = +input[0]
    var array = input[1].trim().split(" ").map(Number)
    var sam = +input[2]
    if(sumExist(t,array,sam)==true){
    console.log("yes")
    }
    else{
    console.log("no")
    }
    sumExist(t,array,sam)
   }
   function sumExist(t,array,sam)
   {
    if(sam==0)
    return true;
    if(t==0)
    return false;
    
    if(array[t-1]>sam)
    return sumExist(t-1,array,sam);
    
    return sumExist(t-1,array,sam)|| sumExist(t-1,array,sam-array[t-1])
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