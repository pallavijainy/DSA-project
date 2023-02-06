function isVowel(s) {
    if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u")
        return true;
    return false;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ");
    let ans = [0];
    let final = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if (isVowel(str[0]) && isVowel(str[str.length - 1])) ans.push(1);
        else ans.push(0);
    }

    for (let i = 1; i < ans.length; i++) {
        ans[i] += ans[i - 1];
    }

    let query = newInput.slice(3);
    for (let i = 0; i < query.length; i++) {
        let [n, m] = query[i].trim().split(" ").map(Number);
        final.push(ans[m] - ans[n - 1]);
    }
    console.log(final.join("\n"));
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
  
