// const cookieParser = require('cookie-parser');
const mysql = require('mysql')
var cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());


// DB Connection

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'quizapp',
});
const a = (err) =>{
  if(!err)
  console.log('DB connection succeeded.');
  else
  console.log('DB connection is failed.');
}
mysqlConnection.connect(a);

// All Data From Questions Table

app.get('/quiz/data', (req,res)=>{
  mysqlConnection.query('SELECT * FROM questions',(err, rows, fields)=>{
    if(!err)
    {res.send(rows);
        console.log('Succeed')}    
        else
        console.log(err);
    });
})





app.listen(4000, console.log(`Server is Running on Port 4000`));
