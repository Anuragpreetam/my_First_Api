var express = require('express');
const app = express();
const router = express.Router();
var fs = require('fs');

//middleware
const someMiddleware = function(req,res,next){
    console.log(`From ${req.url} ${new Date()}`)
    next();
}
//Middleware functions are functions that have access to the
//request object (req), the response object (res), 
//and the next middleware function in the
//application’s request-response cycle. 
//The next middleware function is commonly denoted by a variable named next.

//to know more about middleware
//https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113

router.use(someMiddleware)

router
.route("/")
.get((req,res)=>{
    fs.readFile("../" + "restaurantsData.json",'utf-8',(err,data)=>{
            if(err){
                console.log("error in going to file")
                res.send(err)
            }
            else
                res.send(data);
        })
    
})
.post((req,res)=>{
    res.send("this is post")
})

module.exports = router;