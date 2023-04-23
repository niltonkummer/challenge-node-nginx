const express = require('express')
const app = express()
const port = 3000

const configdb = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DBNAME,
}

const mysql = require('mysql')
const connection = mysql.createConnection(configdb)

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/', (req, res) => {
    const name = req.query["name"]
    const sql = 'INSERT INTO people (name) values ("' + name + '")'
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result));
    })        
    res.status(200)
    res.send('<h1>Full Cycle Rocks!!</h1><p>Olá ' + name + '</p>')
})

app.listen(port, () => {
    console.log('Rodando na porta '+ port)
})