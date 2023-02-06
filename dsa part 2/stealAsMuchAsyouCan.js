function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let c=+input[0];
    let n=+input[1];
    let price=input[2].trim().split(" ").map(Number);
    let weight=input[3].trim().split(" ").map(Number);
    // console.log(c,n,weight,price);

    let ans=[];
    for(let i=0;i<n;i++){
        ans.push([price[i]/weight[i],price[i],weight[i]]);
    }
    ans.sort((a,b)=>b[0]-a[0]);
    // console.log(ans);

    let max=0;
    for(let i=0;i<n;i++){
      if(ans[i][2]<=c){
        max+=ans[i][1];
        c=-ans[i][2];
      }else{
        max+=ans[i][0]*(c);
        break;
      }
    }

    console.log(Math.round(max));
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
 