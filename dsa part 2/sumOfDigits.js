function sumOfDigits(n) {
    var sum = 0;
    while (n != 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
    return sum;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var arr = newInput[i + 1].split(" ").map(Number);
        var sum = 0;
        for (var j = 0; j < arr.length; j++)
            sum += sumOfDigits(arr[j]);

        console.log(sum);

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
   