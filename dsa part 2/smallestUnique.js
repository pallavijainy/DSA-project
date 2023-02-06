const runProgram = (input)=> {
  input = input.trim().split('\n')
  let str = input[0].trim()
  let obj = {};
  for(let i = 0;i< str.length; i++){
      !obj[str[i]] ? obj[str[i]] = 1 : obj[str[i]]++
  }
   let final = Object.keys(obj).join('')
   console.log(final);
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
   