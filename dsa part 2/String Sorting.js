//Enter code here
function runProgram(input){
    
    input=input.trim().split("\n");
    var test=+input[0];
    
    var l=1;
    
    for(var i=0; i<test; i++)
    {
        var N=+input[l++]
       
        var str=input[l++];
    
        sam(N,str)
    }

}

function sam(N,str){
    
    var out=0;
    
    for(var i=0; i<N; i++)
    {
        if(str[i]>str[i+1])
        {
          out++;
        }
    }
    console.log(out)
}


if (process.env.USER === "sanagm"){
  runProgram(``);
 }else{
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