//Enter code here

function runProgram(input) {
    var str=input.trim();
    subString(str); 
    
    }
    
    function subString(str){
        var sam=1;
        var s=1;
        
        for(var i=0; i<str.length; i++)
        {
            if(str[i+1]>=str[i])
            {
                s++;
            }
            else
            {
                if(s>sam){sam=s}
                s=1;
                newstr="";
            }
        }
        console.log(sam);
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
       