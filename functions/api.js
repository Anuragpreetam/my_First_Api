var express = require('express');//require express framework
var fs = require('fs') //require filesystem object
const app = express();
const restaurants = require("../routes/restaurants")
const serverless = require('serverless-http');

const port = process.env.port || 5050;

app.use("/restaurants",restaurants)
app.use(express.json());

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server listening on ${port}`)
})


//use curl to test api in terminal
//curl http:localhost:5050/restaurants/