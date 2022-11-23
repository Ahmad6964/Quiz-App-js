// const cookieParser = require('cookie-parser');
const mysql = require('mysql')
var cors = require('cors')
const path = require('path');
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

app.get('/quiz', (req, res) => {
res.sendFile(path.join(__dirname, '/public/quiz.html'));
 });
app.get('/login', (req, res) => {
res.sendFile(path.join(__dirname, '/public/login.html'));
 });
app.get('/dashbord', (req, res) => {
res.sendFile(path.join(__dirname, '/public/dashbord.html'));
 });
app.get('/result', (req, res) => {
res.sendFile(path.join(__dirname, '/public/result.html'));
 });

 //1) CREATE QUIZ
function createQuiz(req, res) {
  console.log(req.body);
  const data = req.body;
  mysqlConnection.query(
    `INSERT INTO createquiz (question,option1,option2,option3,option4,correct) VALUES ("${data.question}","${data.option1}","${data.option2}","${data.option3}","${data.option4}","${data.correct}")`,
    (err, rows, fields) => {
      if (!err) {
        console.log("succeed");
        res.send(rows);
      } else console.log(err, "err");
    }
  );
}
app.post("/create/quiz", createQuiz);





app.listen(3000, console.log(`Server is Running on Port 3000`));