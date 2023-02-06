function stringToArray(el) {
    return el.split(" ").map(Number);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);
    var result = "";

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0)
            for (var j = arr[0].length - 1; j >= 0; j--)
                result += arr[i][j] + " ";
        else
            for (var j = 0; j < arr[0].length; j++)
                result += arr[i][j] + " ";
    }

    console.log(result);



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
   