const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'Banco_de_dados/dbProjeto.db';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var db = new sqlite3.Database(DBPATH);
app.use(express.static('public'));
var vetor = []

//variáveis e constantes necessárias para o pleno funcionamento do projeto, além
//de outras definições.

// app.use('Backend/', express.static(__dirname + '/src/Backend'));

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/public/paghome.html');
}); //define o arquivo paghome como default quando se acessa o url do site, demonstrando-o.

app.get('/analise', (req, res) => {
    //console.log('/Frontend');
    res.sendFile(__dirname + '/public/analise.html'); 
}); //envia o arquivo "análise.html" quando se realiza a requisição /analise, demonstrando-o e o lendo.

app.get('/info_medias', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = `SELECT * FROM Viagem`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}); //demonstra as arrays contendo os valores medios das viagens quando requisitado.

app.get('/info_M_Vagoes', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = `SELECT * FROM Resumo_vagoes WHERE tipo_dados="completo"`
    db.all(sql, [], (err, rows) =>{
        if (err){
            throw err;
        }
        vetor = rows
        res.send(vetor)
    })
    console.log(vetor)
})


app.get('/info', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = `SELECT * FROM Viagem`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}); //seleciona todos os dados da tabela viagem

app.get('/choque1', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var id_choque1 = req.query.id;
  var sql = `SELECT * FROM Choque1 WHERE id_choque1=${id_choque1}`;
  db.all(sql, [], (err, rows) => {
      if (err) {
          throw err;
      }
      res.send(rows);
  });
}); //seleciona todos os dados da tabela choque 1 nos quais o id_choque1 tem valor igual a um selecionado anteriormente.

app.get('/choque1All', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = `SELECT * FROM Choque1`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
  }); //seleciona todos os dados da tabela choque1.

app.get('/choque2', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id_choque2 = req.query.id;
    var sql = `SELECT * FROM Choque2`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}); //seleciona todos os dados da tabela choque 2.

app.get('/pico', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id_pico = req.query.id;
    var sql = `SELECT * FROM Pico`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}); //lê o banco de dados selecionando todos os arquivos da tabela Pico os quais tem id_pico tem valor igual a um selecionado anteriormente.

app.get('/viagens', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id_viagem = req.query.id;
    var sql = `SELECT * FROM Viagem WHERE id_viagem=${id_viagem}`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}); //seleciona todos os dados da tabela Viagem nos quais o id_viagem tem valor igual a um selecionado anteriormente. 

app.post('/inserePico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id_pico = req.body.id_pico;
    var id_viagem = req.body.id_viagem;
    var tipo_vagao = req.body.tipo_vagao;
    var data_hora = req.body.data_hora;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var velocidade = req.body.velocidade;
    var posicao = req.body.posicao;
    var placa_virtual = req.body.placa_virtual;
    var trecho = req.body.trecho;
    var engate = req.body.engate;
    var delta = req.body.delta;
    var act = req.body.act;
    var peg = req.body.peg;
    sql = `INSERT INTO Pico VALUES (${id_pico}, ${id_viagem}, "${tipo_vagao}", ${data_hora}, ${latitude}, ${longitude}, ${velocidade}, ${posicao}, "${placa_virtual}", "${trecho}", ${engate}, ${delta}, ${act}, ${peg})`;
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro na gravação: " + err);
        }
        else {
            res.send("Pico cadastrado com sucesso");
        }
    });
}); //insere na tabela Pico valores como id_pico, id_viagem, tipo do vagão, etc.


app.post("/deletPico", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id_pico = parseInt(req.body.id_pico);
    console.log(parseInt(id_pico))
    var sql = `DELETE FROM Pico WHERE id_pico = ${id_pico}`;
    //console.log(sql,'hahahahah');
    db.run(sql, [], (err,rows) => {
        if(err){
            throw err;  
        }
        console.log("Registro deletado com sucesso");
        console.log(rows)
    });
}); //deleta todos os valores que tenham deterinado id na tabela pico.

app.put('/atualizaPico', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id_pico = req.body.id_pico
    var tipo_vagao = req.body.tipo_vagao;
    var data_hora = req.body.data_hora;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var velocidade = req.body.velocidade;
    var posicao = req.body.posicao;
    var placa_virtual = req.body.placa_virtual;
    var trecho = req.body.trecho;
    var engate = req.body.engate;
    var delta = req.body.delta;
    var act = req.body.act;
    var peg = req.body.peg;
    var sql = `UPDATE Pico SET tipo_vagao="${tipo_vagao}", data_hora=${data_hora}, latitude=${latitude}, longitude=${longitude}, velocidade=${velocidade}, posicao=${posicao}, placa_virtual="${placa_virtual}", trecho="${trecho}", engate=${engate}, delta=${delta}, act=${act}, peg=${peg} WHERE id_pico = ${id_pico}`;
    db.run(sql, [], (err,rows) => {
        if (err) {
            res.send("Erro na atualização: " + err);
        }
        else {
            res.send("Pico atualizado com sucesso")
            console.log(rows);
        }
    });
}); //atualiza os dados relativos a determinado id_pico na tabela Pico.

app.get('/relatorio', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/public/relatorio.html');
}); //mostra o relatório da viagem.

app.listen(port, hostname, () => {
    console.log('Servidor rodando em http://' + hostname + ':' + port);
}); //escreve no console o "link" de acesso para a aplicação.
