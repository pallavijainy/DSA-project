function maximumSubarray(arr, k) {
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += arr[i];
    }
    var max = sum;
    for (var i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        max = Math.max(max, sum);
    }
    return max;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var nk = newInput[0].split(" ").map(Number);
    var k = nk[1];
    var arr = newInput[1].split(" ").map(Number);
    console.log(maximumSubarray(arr, k));
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
   