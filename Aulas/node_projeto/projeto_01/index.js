const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended:true
}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

var tarefas = ['Arrumar o quarto', 'Ir para a academia']


app.get('/deletar/:id',(req,res)=>{
  tarefas = tarefas.filter(function(val,index){
    if(index != req.params.id){
      return val;
    }
  })
  res.render('index',{tarefasList:tarefas});
})

app.post('/',(req,res)=>{
  tarefas.push(req.body.tarefa);
  res.render('index',{tarefasList:tarefas});
})

app.get('/',(req,res)=>{

  res.render('index', {tarefasList:tarefas});

})

app.listen(5000,()=>{
  console.log('server rodando!')
})