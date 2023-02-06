function runProgram(input){
    
    input=input.trim().split("\n")
    
      let tc=input[0];
      
   let line=1;
   
   for(let i=0;i<tc;i++)
   {
       let n=input[line++].trim();
       let str1=input[line++].trim().split("")
       
       let str2=input[line++].trim().split("")
       
       MasaiSch(str1,str2,n)

   }
}

function  MasaiSch(str1,str2,n)
{
       let stk1=[];
       
   let stk2=[];
   
       for(let i=0;i<n;i++)
       {
        if(str1[i] == "#")
        {
             stk1.pop();
           }
           
           else{
           stk1.push(str1[i]);
        }
       
       
        if(str2[i] == "#")
        {
            stk2.pop();
       }
       else{
           stk2.push(str2[i]);
       }
   }


   if(stk1.join("") === stk2.join(""))
   {
        console.log("CORRECT")
   }else{
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