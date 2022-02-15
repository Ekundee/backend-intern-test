const express = require('express')
const bodyParser = require("body-parser")
const {Pool,Client} = require("pg")

var urlencode  = bodyParser.urlencoded({extended : false})
var jsonencode  = bodyParser.json()

const router = express.Router();

router.post("/" , urlencode , (req,res)=>{
    //res.send("All necessary tables have been created")

    var pool = new Pool({
        user : "postgres",
        database : "Risevest",
        password : "Oluwadamilare3#",
        host : "localhost",
        port : 5432
    })

    pool.query("CREATE TABLE registered_users (	user_id serial PRIMARY KEY, 	email VARCHAR ( 255 ) UNIQUE NOT NULL, firstname VARCHAR ( 50 ) NOT NULL,	lastname VARCHAR ( 50 ) NOT NULL, phoneNo VARCHAR ( 255 ) NOT NULL, password VARCHAR ( 255 ) NOT NULL )" , (err,ress)=>{
        console.log(err)
    })

    setTimeout(() => {
        res.redirect("/")
    }, 2000);
})

module.exports = router;