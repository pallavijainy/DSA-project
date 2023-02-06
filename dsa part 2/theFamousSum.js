function superDigit(n) {
    let sum = 0;
    while (n != 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }


    if (Math.floor(sum / 10) == 0)
        return sum
    else
        return superDigit(sum);
}

function runProgram(input) {
    let newInput = input.trim().split(" ");
    let temp = newInput[0];
    let k = newInput[1];
    let n = 0;

    for (let i = 0; i < temp.length; i++)
        n += Number(temp[i]);

    n = n * k;

    console.log(superDigit(n));

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
   