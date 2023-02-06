//Enter code here
function runProgram(input){
    
    input = input.trim().split('\n')
    var [l,l1]=input[0].trim().split(' ').map(Number);
    
    var sam1=input[1].trim();
    var sam2=input[2].trim();
    
    SubsequenceCheck(sam1,sam2,l,l1)
}
function SubsequenceCheck(sam1,sam2,l,l1){
    var left=0;
    var right=0;
    var mid=0;
    
    while(left<l && right<l1)
    {
        if(sam1[left]==sam2[right])
        {
            mid++;
            left++;
            right++;
        }
        else
        {
            right++;
        }
    }
    
    if(mid==l)
    {
        console.log("YES")
    }
    else
    {
        console.log("NO")
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