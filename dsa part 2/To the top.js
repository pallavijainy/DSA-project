//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    var tc = +input[0]
    line=1
    for(var i = 0; i<tc; i++)
    {
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        attop(n,arr)
    }
    
}
function attop(n,arr){
    var i = 0;
    var maximum = 0;
    while(i<arr.length && i<=maximum)
    {
        maximum=Math.max(i+arr[i],maximum)
        i++;
    }
    if(i==arr.length)
    {
        console.log("YES")
    }
    else
    {
        console.log("NO")
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