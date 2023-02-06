// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    // console.log(input)
    let test = input[0]
    let line = 1;
    for (let i = 0; i < test; i++) {
        let el = input[line++]
        let arr = input[line++]
        // console.log(el,arr)
        nearSmallSum(el, arr)
    }

}
function nearSmallSum(el, arr) {
    const stack = []
    var sum = 0;
    for (let i = el - 1; i >= 0; i--) {
        if (stack.length === 0) {
            sum += 0
            stack.push(arr[i])
            continue;
        }
        for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j] < arr[i]) {
                sum += stack[j]
                break
            }
            else {
                stack.pop()

            }

        }

        stack.push(arr[i])

    }
    console.log(sum)
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
   