var express = require('express');//require express framework
var fs = require('fs') //require filesystem object
const app = express();

app.get("/api",(req,res)=>{
    console.log("Hello world")
})

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("api listening at http://%s:%s",host,port)
})

