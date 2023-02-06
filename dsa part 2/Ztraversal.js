function stringToArray(el) {
    return el.split(" ").map(Number);
}

function printZtraversal(arr) {
    var n = arr.length;
    var result = "";

    for (var i = 0; i < n; i++)
        result += arr[0][i] + " ";

    var i = 0;
    var j = n - 1;
    while (i < n - 1) {
        i++;
        j--;
        result += arr[i][j] + " ";
    }

    for (var i = 1; i < n; i++)
        result += arr[n - 1][i] + " ";

    console.log(result);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    var index = 1;
    while (t-- > 0) {
        var rows = Number(newInput[index]);
        var arr_lines = newInput.slice(index + 1, index + 1 + rows);
        var arr = arr_lines.map(stringToArray);
        index = index + 1 + rows;
        printZtraversal(arr);
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
   