function evenSubArrayCount(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++)
        for (var j = i + 1; j < arr.length + 1; j++) {
            var subArray = arr.slice(i, j);
            if (subArray[0] % 2 == 0 && subArray[subArray.length - 1] % 2 == 0)
                count++;
        }
    return count;



}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(evenSubArrayCount(arr));
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