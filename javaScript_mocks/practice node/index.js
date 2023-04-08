const http = require("http")


const server = http.createServer((req,res)=>{
    if(req.url =="/"){
        res.end("hello")
    }else if(req.url == "/reports"){
        res.end("reports")
    }else if(res.url == "data"){
        res.end("data")
    }
});


server.listen(4500 , ()=>{
    console.log("listening to port 4500")
})