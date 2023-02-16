function v(str, k) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let alpha2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = "0123456789";
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    let flag = true;
    for (let j = 0; j < alpha.length; j++) {
      if (str[i] == alpha[j]) {
        let sum = j + k;
        ans.push(alpha[sum % 26]);
        flag = false;
        break;
      } else if (str[i] == alpha2[j]) {
        let sum = j + k;
        ans.push(alpha2[sum % 26]);
        flag = false;
        break;
      }
    }

    for (let t = 0; t < num.length; t++) {
      if (str[i] == num[t]) {
        let sum = +num[t] + k;
        ans.push(sum % 10);
        flag = false;
        break;
      }
    }
    if (flag) {
      ans.push(str[i]);
    }
  }
  console.log(ans.join(""));
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let str = input[0];
  let k = +input[1];
  v(str, k);
}

if (process.env.USER === "") {
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
