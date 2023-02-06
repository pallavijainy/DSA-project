const findTwoSortedArray = (array1, array2,n)=>{
    let i = 0,j = n-1,count = 0;
    while(i < n && j >= 0){
        if(array1[i] === array2[j]){count++,i++,j--}
        else if(array1[i] < array2[j])i++;
        else j--;
    }
    return count
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let n = +input[line++]
       let array1 = input[line++].trim().split(" ").map(Number);
       let array2 = input[line++].trim().split(" ").map(Number);
       console.log(findTwoSortedArray(array1,array2,n));
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
   