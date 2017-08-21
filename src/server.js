const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Good Morning Sunny !!")
})

app.listen(8085, function(){
    console.log("Server started at : http://localhost:8085/")
})