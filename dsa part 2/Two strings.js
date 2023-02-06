function runProgram(input){
    input = input.trim().split("\n")
    let tc = +input[0]
    let line =1
    for(var i=0;i<tc;i++){
        let str1 = input[line++]
         let str2 = input[line++]
       let ans =  stringCheck(str1,str2)
       if(ans == true){
           console.log("YES")
       }
       else{
           console.log("NO")
       }
    }
}
function stringCheck(str1,str2){
    let count =0
    let obj = {}
    for(var i=0;i<str1.length;i++){
        obj[str1[i]] = 1
    }
    for(var j=0;j<str2.length;j++){
       if(obj[str2[j]] == 1){
        return true
    }
  }

  return false
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
 