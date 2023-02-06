function runProgram(input) {
  input = input.trim().split('\n')

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  // console.log(input)
  let test = input[0]
  let line = 1
  for (let i = 0; i < test; i++) {
    const [el, target] = input[line++]
    let arr = input[line++]
    arr.sort((a, b) => a - b)
    console.log(Pair(el, target, arr))
    Pair(el, target, arr)
  }
}
function Pair(el, target, arr) {
 
  //console.log(arr)
  for (i = 0; i < el; i++) {
    let x = BinarySearch(arr, 0, el-1,target - arr[i])
   // console.log(x)
    if (x === true) {
      return 1;
    }
  }
 return -1;
}
function BinarySearch(arr, low, high, key) {
  let mid = low + Math.floor((high - low) / 2)
  let mid_val = arr[mid]
  //console.log(mid_val)
  if (high <= low) {
    return false;
  }
  if (mid_val === key) {
    // return true;
    return true;
  } else if (mid_val < key) {
    BinarySearch(arr, mid + 1, high, key)
  } else {
    BinarySearch(arr, low, mid - 1, key)
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
 
