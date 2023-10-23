const express = require("express");
const app = express(); // host - app
const port = 2210;

app.listen(port,function(){
    console.log("Server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));

// connect database
require("./src/db/connect");

// routes
app.get("/",function(req,res){
    res.render("home/home");
})
app.get("/about-us",function(req,res){
    res.render("aboutus/about");
})
app.get("/auth/register",function(req,res){
    res.render("auth/register");
})