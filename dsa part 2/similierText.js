function findit(str, res, arr1, curr, obj) {
  if (res.length > 0) {
    if (obj[res] == undefined) obj[res] = 1;
    else obj[res]++;
  }
  for (let i = curr; i < str.length; i++) {
    res += str[i];
    findit(str, res, arr1, i + 1, obj);
    res = res.substring(0, res.length - 1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let arr1 = [];
  let obj = {};
  let obj1 = {};
  let arr2 = [];
  findit(str1, "", arr1, 0, obj);
  findit(str2, "", arr2, 0, obj1);
  // console.log(arr1,arr2);
  let y = Object.keys(obj);
  let x = Object.keys(obj1);
  let final = {};
  for (let i = 0; i < y.length; i++) {
    if (final[y[i]] == undefined) final[y[i]] = 1;
    else final[y[i]]++;
  }
  for (let i = 0; i < x.length; i++) {
    if (final[x[i]] == undefined) final[x[i]] = 1;
    else final[x[i]]++;
  }

  let res = 0;
  for (key in final) {
    if (final[key] >= 2) {
      res = Math.max(res, key.length);
    }
  }
  console.log(res);
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
 