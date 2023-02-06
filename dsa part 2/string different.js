//Enter code here
function runProgram(input) {
    input = input.trim().split("\n");
    var s1 = input[0].trim();
    var s2 = input[1].trim();
    for (var i = 0; i < s1.length; i++) 
    {
      if (s1[i] != s2[i]) 
      console.log(s1[i]);
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