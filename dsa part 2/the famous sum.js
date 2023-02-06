//Enter code here
function runProgram(input){
   input = input.trim().split(" ")
   let str = input[0]
   let k = +input[1]
   let upStr = giveDigit(str,k)
   superDigit(upStr)

   
}

function giveDigit(str,k){
   if(k === 1){
       return str
   }
   let newStr = 0
   for(let i=0; i<str.length;i++){
       let a = Number(str[i]) * k
       // console.log(a)
       newStr += a
   }
   // console.log(newStr)
   let upStr = '' + newStr
   // console.log(typeof upStr)
   return upStr
}


function superDigit(str){
   if(str.length === 1){
       console.log(str)
       return
   }
   
   let temp = 0
   for(let i=0; i<str.length; i++){
       temp += Number(str[i])
   }
   // console.log(temp)
   let updatedStr = "" + temp
   superDigit(updatedStr)
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
 