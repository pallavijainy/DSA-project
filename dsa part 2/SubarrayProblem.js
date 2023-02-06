const findit = (array, n) => {
  let i = 0,
    j = 0;
  let sum = 0,
    count = 0;
  while (j < n) {
    sum += array[i] + array[j];
    if (sum % 2 === 0) {
      count++, j++;
    } else sum -= array[i++];
  }
  return count;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  console.log(findit(array, n));
};
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
 