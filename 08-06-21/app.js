var http = require("http");
var name = require("./module")

http.createServer((req,res)=>{
    res.writeHead(200);
    res.write("My Name is:" + name.myData());
    res.end;
})
.listen(7070);