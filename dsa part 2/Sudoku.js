// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")
    }
    //console.log(input)
    console.log(Sudoku(input))
}
function Sudoku(input) {
   
    if(input.length%3===0)
    {
        if (row(input) && col(input) && row_col_3(input)) {
            return "sudoku"
        }
        else {
            return "Not sudoku"
        }
    }
    else {
        return "Not sudoku"
    }
   
}
function row_col_3(input)
{
    for (let k = 0; k < 9; k = k + 3) {
        // console.log(1)
        for (let i = 0; i < 3; i++) {
            let obj = {}
            let count = 0
            // console.log(obj)
            for (let j = 0; j < 3; j++) {
                let y = input[i + k][j + k]
                if (obj[y] === undefined) {
                    obj[y] = 1
                    count++
                } else {
                    return false
                }
            } 
            //console.log(obj)
        }
    }
    return true
}
function row(input) {
    for (let i = 0; i < input.length; i++) {
        let obj = {}
        let count = 0
        for (let j = 0; j < input.length; j++) {
            
                let x = input[i][j]
                if (obj[x] === undefined) {
                    obj[x] = 1
                    count++
                }
                else {
                    return false
                }
            
            // console.log(input[i][j])
         

        }
        if (count == 9) {
            return true
        }
        else {
            return false
        }
        // console.log(obj)
    }
}


function col(input) {
    for (let i = 0; i < input.length; i++) {
        let obj = {}
        let count = 0
        for (let j = 0; j < input.length; j++) {
            // console.log(input[j][i])
            let x = input[j][i]
            if (obj[x] === undefined) {
                obj[x] = 1
                count++
            }
            else {
                return false
            }

        }
        if (count == 9) {
            return true
        }
        else {
            return false
        }
        // console.log(obj)
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
   