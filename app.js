const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_purwadhika'
});

db.connect();

app.get('/', (req,res) => {
    res.send({
        message: "Hello bisa kok"
    })
});

app.post('/cart', (req,res) => {
    let sql = "INSERT INTO cart SET ?";
    db.query(sql, (err, result) => {
        if (err){
            console.log(err);
            res.send({
                message: "error",
                result: []
            });
        }
        res.send({
            message: "success",
            result: result
        });
    });
});


app.post('/customer', (req,res) => {
    let sql = "INSERT INTO customer SET ?";
    db.query(sql, req.body, (err, result) => {
        if (err){
            console.log(err);
            res.send({
                message: "error",
                result: []
            });
        }
        res.send({
            message: "success",
            result: result
        });
    });
});


app.listen(3000, ()=> {
    console.log("Server Listening On Port 3000");
});