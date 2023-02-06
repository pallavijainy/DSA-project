function solve(arr) {
    let stack = [];
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0 || arr[i] < stack[stack.length - 1])
            stack.push(arr[i]);
        else {
            while (stack[stack.length - 1] === count) {
                stack.pop();
                count++;
            }
            if (stack.length === 0 || arr[i] < stack[stack.length - 1])
                stack.push(arr[i]);
            else return "no";
        }
    }

    return "yes";
}

function runProgram(input) {
    let newInput = input.split("\n");
    let i = 0;
    while (newInput[i].trim() !== "0") {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        i += 2;

        console.log(solve(arr));
    }
}

/*
yes
no
no
no
no
*/
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