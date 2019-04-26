var express = require("express");
var app = express();
app.set('view engine', 'ejs');
app.use("/assets",express.static("assets"));

app.get("/", function(req,res){
res.render("home");	
});
app.get("/about",function(req,res){
res.render("about");	
});
app.get("/location",function(req,res){
res.render("location");
});
app.get("/welcome",function(req,res){
res.send("welcome to my website");
});
app.listen(8084);