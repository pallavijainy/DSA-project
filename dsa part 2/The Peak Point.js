function thePeekP(N, arr){

    // console.log(N, arr);


    for(var i = 1; i < N; i++){

        if( arr[i] > arr[i-1] && arr[i] > arr[i+1] ){
            return i;
        }

    }

    return -1;

}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];

   var line = 1;

   for(var i = 0; i < testCases; i++){

        var N = +input[line];
        line++;

        var arr = input[line].trim().split(' ').map(Number);

        line++;

      console.log(  thePeekP(N, arr));

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
   