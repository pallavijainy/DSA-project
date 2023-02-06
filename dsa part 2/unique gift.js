//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var query = +input[0]
   var line = 1
   for(let i=0;i<query;i++){
       let arr = input[line].trim().split("")
       line++
       celeb(arr)
   }
}

function celeb(arr){
   var bag = '' 
   var queue = []
   var obj = {}
   for(let i=0;i<arr.length;i++){
       
       // checking uniquness of the number
       if(obj[arr[i]] === undefined){
           obj[arr[i]] = 1
       }
       else{
           obj[arr[i]] = obj[arr[i]] + 1
       }
       
       // console.log("obj",obj)
       
       // if number is unique push it in the queue
       if(obj[arr[i]] === 1){
           queue.push(arr[i])
       }
       
       // removing element from front of queue is
       // their value is not 1 meaning they are not unique
       while(obj[queue[0]] !== 1){
           queue.shift()
           if(queue.length === 0){
               break;
           }
       }
       
       // if queue is empty push hash
       if(queue.length === 0){
           bag += '#'
       }
       else{
           bag += queue[0]
       }
       // console.log("queue" , queue)
       
   }
   console.log(bag)
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
   