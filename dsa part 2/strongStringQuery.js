const findVowel = (array, n) => {
  let flag = false,
    flag2 = false;
  if (
    array[0] == "a" ||
    array[0] == "e" ||
    array[0] == "i" ||
    array[0] == "o" ||
    array[0] == "u"
  )
    flag = true;
  if (
    array[n - 1] == "a" ||
    array[n - 1] == "e" ||
    array[n - 1] == "i" ||
    array[n - 1] == "o" ||
    array[n - 1] == "u"
  )
    flag2 = true;
  if (flag && flag2) return true;
  return false;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ");
  let count = 0,
    res = [];
  for (let i = 0; i < array.length; i++) {
    if (findVowel(array[i], array[i].length)) {
      count += 1;
    }
    res.push(count);
  }
  for (let i = 3; i < input.length; i++) {
    let [a, b] = input[i].trim().split(" ").map(Number);

    if (a == 1) {
      console.log(res[b - 1]);
    } else console.log(res[b - 1] - res[a - 1 - 1]);
  }
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
 