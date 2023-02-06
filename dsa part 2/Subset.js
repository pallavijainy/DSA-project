let ans=[];
let count=0;
function subset(arr,n,cur,k){

    if(ans.length>0){
        let a=ans.reduce((prev,cur)=>prev+cur);
        if(a===k){
            count++;
        }
    }

    for(let i=cur;i<n;i++){
        ans.push(arr[i]);
        subset(arr,n,i+1,k);
        ans.pop();
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    // console.log(arr,n, k);
    subset(arr,n, 0,k)
    console.log(count)
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
   