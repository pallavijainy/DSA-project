//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    var test=+input[0]
    var l=1;
    
    for(var i=0; i<test; i++)
    {
    var[N,sam]=input[l++].trim().split(" ").map(Number)
        
    sangam(N,sam) 
    
    }
}
  function sangam(N,sam){
      
      var out=0;
      
      for(var i=0; i<=sam; i++)
      {
          out=out+i;
      }
      
      if(out>N)
      {
          console.log("NO")
      }
      
      else
      {
          console.log("YES")
      }
  }
  

if(process.env.USER === "sangam"){
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