const express = require("express")
const bodyParser = require("body-parser")
const {Pool, Client} = require("pg");
var urlencode = bodyParser.urlencoded({ extended : false})
var jsonencode = bodyParser.json()
router = express.Router();

router.post('/', urlencode, (req,res)=>{
    var email = req.body.email;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phonenumber = req.body.phoneNo;
    var password = req.body.password;

    var register_conn = new Pool({
        host : "localhost",
        database : "Risevest",
        password : "Oluwadamilare3#",
        port : 5432,
        user : "postgres"
    })


    if(email == null  || firstname == null || lastname == null || phonenumber == null || password == null || email == "" ||  firstname == "" ||  lastname == "" ||  phonenumber == "" ||  password == ""  ){
        res.render("Register" , information = {"info" : "Fill in all the boxes"})
    }else{ 
        register_conn.query("SELECT * FROM registered_users WHERE email = $1 " ,[email], (err,ress)=>{
            // res.status(200).json(ress.rowCount);
            if(ress.rowCount == 0){
                register_conn.query("INSERT INTO registered_users(email,firstname, lastname ,phoneno, password) VALUES($1,$2,$3,$4,$5)" ,[email,firstname,lastname,phonenumber,password], (err,ress)=>{
                    res.render("Register" , information = {"info" : "Account Registered", "time" : "1000"})
                })
            }else{
                res.render("Register" , information =  {"info" : "Account Exist"})        
            }
        })


        
    }

   
    
})

module.exports = router