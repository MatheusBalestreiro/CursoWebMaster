// Configurar o Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBw8D9ML7f-xBQXOT7FGUmDKPnGGahtQHA",
  authDomain: "todolist-77b99.firebaseapp.com",
  projectId: "todolist-77b99",
  storageBucket: "todolist-77b99.appspot.com",
  messagingSenderId: "800181078020",
  appId: "1:800181078020:web:a44e11c7575698374b8d51"
};

firebase.initializeApp(firebaseConfig);

// Obter elementos do formulário
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submitBtn");



// Adicionar evento de clique para o botão
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  
  // Autenticação do usuário
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuário autenticado com sucesso
      const user = userCredential.user;
      document.querySelector('.login').style.display = "none";
      document.querySelector('.content').style.display = "block";

    })
    .catch((error) => {
      // Ocorreu um erro ao autenticar o usuário
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro ao autenticar o usuário:", errorCode, errorMessage);
    });

     
  
});

const logoutLink = document.querySelector(".logout");

logoutLink.addEventListener("click", function(event) {
  event.preventDefault();
  firebase.auth().signOut().then(() => {
    // Usuário deslogado com sucesso
    document.querySelector('.login').style.display = "block";
    document.querySelector('.content').style.display = "none";
    console.log("Usuário deslogado.");

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Limpar os campos de entrada de texto
    emailInput.value = "";
    passwordInput.value = "";
    
  }).catch((error) => {
    // Ocorreu um erro ao deslogar o usuário
    console.error("Erro ao deslogar o usuário:", error);
  });
});


// Ouvir por mudanças no banco de dados.
const db = firebase.firestore();
var userId = null;

firebase.auth().onAuthStateChanged((val)=>{
  if(val){
    usuario = val;
    document.querySelector('.content h2').innerHTML = `Bem-vindo de volta ${usuario.email}! `;
    document.querySelector('.login').style.display = "none";
    document.querySelector('.content').style.display = "block";

    db.collection('tarefas').where("userId","==",usuario.uid).onSnapshot((data)=>{
      let list = document.querySelector('#tarefas-single');
      list.innerHTML = "";
      let tarefas = data.docs
      tarefas = tarefas.sort(function(a,b){
        if(a.data().horario <b.data().horario)
          return -1;
        else
          return +1;
      })

      tarefas.map((val)=>{
        list.innerHTML+=`<li class="activity-form">${val.data().tarefa} <a tarefa-id="${val.id}" class="excluir-btn" href="javascript:void(0)">(X)</a></li>`
      })

      var excluirTarefas = document.querySelectorAll('.excluir-btn');

      excluirTarefas.forEach(element => {
              element.addEventListener('click',function(e){
              e.preventDefault();
              let docId = element.getAttribute('tarefa-id');
              db.collection('tarefas').doc(docId).delete();
              })

            });
    })
  }
})

var formCadastro = document.querySelector('.form-cadastro-tarefa');

formCadastro.addEventListener('submit', (e)=>{
  e.preventDefault();

  let tarefa = document.querySelector('.form-cadastro-tarefa [name=tarefa]').value;
  let dateTime = document.querySelector('.form-cadastro-tarefa [name=datetime]').value;
  
  // Verificação data atual < data cadastrada
  
  let dataAtual = new Date().getTime();
  if(dataAtual > new Date(dateTime).getTime()){
    alert('Você informou uma data que não é valida...')
  }else if(tarefa == "" || dateTime == ""){
    alert('Você não pode deixar os campos vazios')
  }else{
    // Inserir e criar coleção caso nao exista.
    db.collection('tarefas').add({
      userId: userId,
      tarefa: tarefa,
      horario: new Date(dateTime).getTime()
    })
    alert('tarefa cadastrada!')
  }
})

