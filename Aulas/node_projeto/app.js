const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const mysql = require('mysql')

app.listen('80', () => {
  console.log("Servidor Rodando !")
});

//Body Parser
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extendeded:false}));
app.use(express.static(path.join(__dirname,'public')));

//Conexao com o banco
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'node'
});

db.connect(function(err){
  if(err)
  {
    console.log("Não foi possível conectar com o banco!")
  }
  var sql = "SELECT * FROM clientes";
})

//rotas
app.get('/',function(req,res){
  let query = db.query("SELECT * FROM clientes", function(err,results){
    res.render('index',{lista:results})
  })
});

app.get('/cadastro',function(req,res){
  res.render('cadastro', {});
});

app.post('/cadastro',function(req,res){
  let nome = req.body.nome;
  let sobrenome = req.body.sobrenome;
  let empresa = req.body.empresa;
  db.query("INSERT INTO clientes (nome,sobrenome,empresa) VALUES (?,?,?)",[nome,sobrenome,empresa],function(err,results){})
  res.render('cadastro', {});
});