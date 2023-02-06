function mainFun(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let num = 1;
    for (let i = 0; i < tc; i++) {
        num++;
        let Data = input[num++].trim().split(" ").map(Number);
        output(Data);
    }
}
const output = (Data) => {
    let stock = new Map()
    for (let i = 0; i < Data.length; i++) 
    {
        let str = Math.floor(Math.sqrt(Math.abs(Data[i])));
        if (stock.has(str)) {
            let val = stock.get(str);
            val.push(Data[i]);
            stock.set(str, val);
        } else {
            let val = [];
            val.push(Data[i]);
            stock.set(str, val);
        }
    }
    let valKey = [];
    let valData = [];
    for ([p, newVal] of stock) {
        valKey.push(p)
    };
    valKey = valKey.sort((a, b) => a - b)
    for (let i = 0; i < valKey.length; i++) {
        let Data1 = []
        for ([p, newVal] of stock) 
        {
            if (valKey[i] == p) newVal.forEach((ele) => Data1.push(ele));
        };
        Data1 = Data1.sort((a, b) => a - b);
        Data1.forEach((ele) => valData.push(ele))
    }
    console.log(valData.join(" "))
}
if (process.env.USER === "sanagm") {
    mainFun(``);
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
        mainFun(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        mainFun(read);
        process.exit(0);
    });
}