const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'Banco_de_dados/bancodedados.db';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var db = new sqlite3.Database(DBPATH);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/src/Frontend/home.html');

});

app.get('/info', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/src/Frontend/info.html');
    var sql = `SELECT * FROM {(esperando o banco)}`;
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
  var id = req.query.id;
  var sql = `SELECT * FROM Choque1 WHERE id_choque1=1`;
  db.all(sql, [], (err, rows) => {
      if (err) {
          throw err;
      }
      res.send(rows);
  });



res.setHeader('Access-Control-Allow-Origin', '*');
    //res.sendFile(__dirname+'/src/Frontend/choques.html');
    var id = req.query.id;
    var sql = `SELECT * FROM Choque1 WHERE id_choque1=1`;
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
    var id = req.query.id;
    var sql = `SELECT * FROM Choque2 WHERE id_choque2=1`;
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
    var id = req.query.id;
    var sql = `SELECT * FROM Pico WHERE id_pico=1`;
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
    var id = req.query.id;
    var sql = `SELECT * FROM Viagem WHERE id_viagem=1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.post('/inserePico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id_pico = req.body.id_pico
    var id_viagem = req.body.id_viagem
    var tipo_vagao = req.body.tipo_vagao
    var data_hora = req.body.data_hora
    var latitude = req.body.latitude
    var longitude = req.body.longitude
    var velocidade = req.body.velocidade
    var posicao = req.body.posicao
    var placa_virtual = req.body.placa_virtual
    var trecho = req.body.trecho
    var engate = req.body.engate
    var delta = req.body.delta
    var act = req.body.act
    var peg = req.body.peg
    sql = `INSERT INTO Viagem () VALUES (${id_pico}, ${id_viagem}, ${tipo_vagao}, ${max_forca}, )`;
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
