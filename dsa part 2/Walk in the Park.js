//Enter code here
function runProgram(input){
    input= input.trim().split("\n");
    let tc =+input[0];
    let line=1;
    for(var i=0; i<tc; i++)
    {
    var mat=[]
    var mat1=[];
    var [r,c] = input[line++].trim().split(" ") .map(Number);
    for(var j=0; j<r; j++){
    mat.push(input[line++].trim().split(""));
    mat1.push(new Array(c).fill(0))
    }
    WalkinthePark(mat,r,c,mat1);
    }
}
function WalkinthePark(mat,r,c,mat1){
    var i=0; 
    var j=0;
    var count=0;
   while(i<r&& j<c && i>=0 && j>=0 && mat1[i][j]==0)
   {
       if(mat[i][j]=="U")
       {
           mat1[i][j]=1;
           i--;
           count++;
       }
       else if (mat[i][j]=="D")
       {
           mat1[i][j]=1;
           i++;
           count++;
       }
       else if (mat[i][j]=="R")
       {
           mat1[i][j]=1;
           j++;
           count++;
       }
       else if (mat[i][j]=="L")
       {
           mat1[i][j]=1;
           j--;
           count++;
    }
    }
    console.log(count);
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