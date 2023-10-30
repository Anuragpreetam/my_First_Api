var express = require('express');//require express framework
var fs = require('fs') //require filesystem object
const app = express();

const PORT = 5050;
app.get("/getRestaurants",(req,res)=>{
        console.log(res.status)
    fs.readFile(__dirname+ "/" + "restaurantsData.json", 'utf-8',function(err,data){
        // var d = await fetch('http://localhost:8080/getRestaurants');
        res.send(data)
        
    })
})

app.listen(PORT,function(){
    console.log(`api listening at http://localhost:${PORT}`)
})

