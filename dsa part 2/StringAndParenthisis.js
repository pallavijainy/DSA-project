const findit = (array) => {
  let stack = [];
  for (let x of array) {
    if (x == "[" || x == "{" || x == "(") stack.push(x);
    else {
      if (stack.length == 0) return false;
      let res = stack.pop();
      if (
        (x == "]" && res != "[") ||
        (x == "}" && res != "{") ||
        (x == ")" && res != "(")
      )
        return false;
    }
  }
  return stack.length == 0;
};

function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[0].trim().split("");
  let newARr = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] == "{" ||
      array[i] == "}" ||
      array[i] == "[" ||
      array[i] == "]" ||
      array[i] == "(" ||
      array[i] == ")"
    )
      newARr.push(array[i]);
  }
  findit(newARr) ? console.log("balanced") : console.log("unbalanced");
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
 