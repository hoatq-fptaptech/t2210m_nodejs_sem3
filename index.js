const express = require("express");
const app = express(); // host - app
const port = 2210;

app.listen(port,function(){
    console.log("Server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// connect database
require("./src/db/connect");

// routes
const web_route = require("./src/routes/web.route");
app.use("/",web_route);

const auth_route = require("./src/routes/auth.route");
app.use("/auth",auth_route);