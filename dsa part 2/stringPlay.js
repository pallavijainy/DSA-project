const toLowerCase = (array)=>{
    let res = ""
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i = 0;i< array.length; i++){
        for(let j = 0;j<= upperCase.length; j++){
            if(upperCase[j] === array[i]){res+= lowerCase[j];break}
            if(j === upperCase.length)res+= array[i]
        }
    }
    return res;
}
const toUpperCase = (array)=>{
    let res = ""
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i = 0;i< array.length; i++){
        for(let j = 0;j<= lowerCase.length; j++){
            if(lowerCase[j] === array[i]){res+= upperCase[j];break}
            if(j === upperCase.length)res+= array[i]
        }
    }
    return res;
}


const camelCase = (array)=>{
let res = ""
for(let i = 0;i< array.length;i++){
    if(i == 0) res += toLowerCase(array[i])
    else {
        res += toUpperCase(array[i].charAt(0)) + toLowerCase(array[i].slice(1))
    }
}
console.log(res);
}

const snakeCase = (array)=>{
    let res = ""
    array = array.map((e)=>toLowerCase(e))
    for(let i = 0;i< array.length; i++){
        if(i !== array.length-1)res += array[i] + "_"
        else res += array[i]
    }
    console.log(res);
}

const hypenCase = (array)=>{
    let res = ""
    array = array.map((e)=>toLowerCase(e))
    for(let i = 0;i< array.length; i++){
        if(i !== array.length-1)res += array[i] + "-"
        else res += array[i]
    }
    console.log(res);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
  let array = input[0].trim().split(" ")
  array = array.filter((e)=>e.charAt(0) !== "")
  camelCase(array)
  snakeCase(array)
  hypenCase(array)
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
   