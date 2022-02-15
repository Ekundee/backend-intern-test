var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine" , "ejs")



app.set("views" , path.join(__dirname + "/views"))
app.set("layout" , path.join(__dirname + "/views/layouts"))
app.set("partials" , path.join(__dirname + "/views/partials"))
app.use(express.static("./public"))


app.get("/", (req,res)=>{
    res.render("Register" , information = {})
});

app.get("/sqlcreate" , (req,res)=>{
    res.render("sqlCreate")
})

app.get("/login_page" , (req,res)=>{
    res.render("login" , information = {})
})

module.exports = app;
