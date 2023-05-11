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
    let sql = `SELECT * FROM {(esperando o banco)}`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});

app.get('/choque1', (req, res) => {
<<<<<<< Updated upstream
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



  
=======
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
>>>>>>> Stashed changes
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

app.post('/inserePico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id_pico = req.body.id_pico
    let id_viagem = req.body.id_viagem
    let tipo_vagao = req.body.tipo_vagao text
    let data_hora = req.body.data_hora
    let latitude = req.body.latitude
    let longitude = req.body.longitude
    let velocidade = req.body.velocidade
    let posicao = req.body.posicao
    let placa_virtual = req.body.placa_virtual text
    let trecho = req.body.trecho text
    let engate = req.body.engate
    let delta = req.body.delta
    let act = req.body.act
    let peg = req.body.peg
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
