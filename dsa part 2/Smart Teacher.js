function runProgram(input){
    input = input.trim().split("\n")
    let tc = +input[0]
    let line =1
    for(var i=0;i<tc;i++){
        let n = +input[line++]
        let str1 = input[line++]
         let str2 = input[line++]
        deletea(str1,str2,n)
    }
}
function deletea(str1,str2,n){
    let stack = []
     let stack1 = []
    for(var i=0;i<n;i++){
        if(str1[i]!="#"){
            stack.push(str1[i])
        }
        else{
           stack.pop(stack[stack.length-1]) 
        }
    }
    for(var i=0;i<n;i++){
        if(str2[i]!="#"){
            stack1.push(str2[i])
        }
        else{
           stack1.pop(stack1[stack1.length-1]) 
        }
    }
    if(stack.join(" ")==stack1.join(" ")){
        console.log("CORRECT")
    }
    else{
        console.log("WRONG")
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
 