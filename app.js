var express = require("express")
var app = express()
var fs = require("fs")

app.set("view engine", "ejs")

app.get("/", function(req,res){
    res.render("../views/index")
})

app.get("/admin", function(req,res){
    res.render("views/admin")
})
app.listen(5000, ()=>{
    console.log(`Listening of port 5000`)
})
