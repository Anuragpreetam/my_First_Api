var express = require('express');//require express framework
var fs = require('fs') //require filesystem object
const app = express();
const restaurants = require("../routes/restaurants")
const serverless = require('serverless-http');
var router = express.Router();
const port = process.env.port || 5050;

app.use("/restaurants",restaurants)
app.use(express.json());

// router
// .route("/")
// .get((req,res)=>{
//     res.send("App is running")
// })
app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server listening on ${port}`)
})


//use curl to test api in terminal
//curl http:localhost:5050/restaurants/

app.use('/.netlify/functions/api',restaurants)