const findSpiral = (arr,r,c)=>{
    let count = 0,left = 0,right = arr[0].length-1,top = 0,bottom = arr.length-1,res = "";
    let total = N * M;
    while(count < total){
        for(let i = top; i <= bottom & count < total; i++)res += arr[i][left] + " ",count++;left++;
        for(let i = left;i <= right & count < total;i++)res += arr[bottom][i] + " ",count++;bottom--;
        for(let i = bottom; i >= top & count < total; i--)res += arr[i][right] + " ",count++;right--;
        for(let i = right; i >= left & count < total; i--)res += arr[top][i] + " ",count++;top++;
    }
    console.log(res);
}
const runProgram = (input)=> {
  input = input.trim().split('\n')
  let cases = +input[0],line = 1;
  for(let i = 0; i < cases; i++){
      let [r,c] = input[line++].trim().split(" ").map(Number);
      let arr = [];
      for(let i = 0;i < r; i++)arr.push(input[line++].trim().split(" ").map(Number));
      findSpiral(arr,r,c)
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
   