const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'Banco_de_dados/bancodedados.db';
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

app.get('/choque1', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //res.sendFile(__dirname+'/src/Frontend/choques.html');
  let id = req.query.id;
  let sql = `SELECT * FROM Choque1 WHERE id_choque1=1`;
  db.all(sql, [], (err, rows) => {
      if (err) {
          throw err;
      }
      res.send(rows);
  });
});

app.get('/choque2', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.sendFile(__dirname+'/src/Frontend/choques.html');
    let id = req.query.id;
    let sql = `SELECT * FROM Choque2 WHERE id_choque2=1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.get('/pico', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.sendFile(__dirname+'/src/Frontend/choques.html');
    let id = req.query.id;
    let sql = `SELECT * FROM Pico WHERE id_pico=1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.get('/viagens', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.sendFile(__dirname+'/src/Frontend/choques.html');
    let id = req.query.id;
    let sql = `SELECT * FROM Viagem WHERE id_viagem=1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.post('/insereviagem', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id_viagem = req.body.id_viagem
    let data_viagem = req.body.data_viagem
    let max_forca = req.body.max_forca
    let min_forca = req.body.min_forca
    let max_act = req.body.max_act
    let min_act = req.body.min_act
    let max_peg = req.body.max_peg
    let min_peg = req.body.min_peg
    let media_valores = req.body.media_valores
    sql = `INSERT INTO Viagem () VALUES (${id}, "${nome}", "${cargo}")`;
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro na gravação: " + err);
        }
        else {
            res.send("ID cadastrado com sucesso");
        }
    });
});

app.listen(port, hostname, () => {
  console.log('Servidor rodando em http://' + hostname + ':' + port);
});
