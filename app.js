const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'nome.db';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
var db = new sqlite3.Database(DBPATH);
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname+'/src/Frontend/home.html');

});

app.get('/info', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname+'/src/Frontend/info.html');
    let sql = `SELECT * FROM {(esperando o banco)}`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.get('/choque', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname+'/src/Frontend/choques.html');
  let sql = `SELECT * FROM {(esperando o banco)} WHERE id=${req.query.id}`;
  db.all(sql, [], (err, rows) => {
      if (err) {
          throw err;
      }
      res.send(rows);
  });
});









app.listen(port, hostname, () => {
  console.log('Servidor rodando em http://' + hostname + ':' + port);
});
