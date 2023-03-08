function   pal(n,arr){
    //enter code
  let prod =1;
  let left = [];
  let right = [];
  let ans =[]
  for(let i=0; i<n; i++){
      left[i]= prod;
      prod*=arr[i]
      
  }
  prod=1;
  for(let i=n-1; i>=0; i--){
      right[i] = prod;
      prod*=arr[i]
  }
  
  for(let i=0; i<n; i++){
      ans.push(left[i]*right[i])
  }
  console.log(ans.join(" "))

}
function runProgram(input) {
  // Write code here
  input=input.trim().split("\n")
  let tc =+input[0]
  let line =1;
  for(let i=0; i<tc; i++){
      let n =+input[line++];
      let arr = input[line++].trim().split(" ").map(Number)
     pal(n,arr)
  }
}

if (process.env.USER === "") {
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
