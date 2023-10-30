var express = require('express');//require express framework
var fs = require('fs') //require filesystem object
const app = express();
const router = express.Router();
const serverless = require('serverless-http');

const PORT = 5050;
router.get("/getRestaurants",(req,res)=>{
        console.log(res.status)
    fs.readFile(__dirname+ "/" + "restaurantsData.json", 'utf-8',async function(err,data){
        // var d = await fetch('http://localhost:8080/getRestaurants');
        res.send(data)
        
    })
})

router.use('.netlify/functions/server',router)
// router.listen(PORT,function(){
//     console.log(`api listening at http://localhost:${PORT}`)
// })
module.exports.handler = serverless(app);
