const findText = (str1, str2,l,m)=>{
    if(l == 0 || m == 0)return 0;
    if(str1[l-1] === str2[m-1])return 1 + findText(str1,str2,l-1,m-1);
    else return Math.max(findText(str1,str2,l-1,m),findText(str1,str2,l,m-1) )
}
const runProgram = (input)=> {
  input = input.trim().split('\n')
   let str1 = input[0].trim(),str2 = input[1].trim();
   console.log(findText(str1,str2,str1.length,str2.length));
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
   
  
  