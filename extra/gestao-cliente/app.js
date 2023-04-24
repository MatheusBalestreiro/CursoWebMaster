const firebaseConfig = {
  apiKey: "AIzaSyBnpEgf9TNfbM0S7_924RWN8f7tADbcNWE",
  authDomain: "portal-a0da9.firebaseapp.com",
  projectId: "portal-a0da9",
  storageBucket: "portal-a0da9.appspot.com",
  messagingSenderId: "1034888745355",
  appId: "1:1034888745355:web:3e8f3f10cf84800ec9df8e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

// Upload de arquivo...
const formCliente = document.querySelector('#form-cliente');

formCliente.addEventListener('submit',(e)=>{
  e.preventDefault();
  let comprovanteText = document.querySelector('[name=comprovante]').value;
  let arquivo = document.querySelector('[name=arquivo]').files[0];

  const uploadTask = storage.ref('documentos/'+arquivo.name).put(arquivo);

  uploadTask.on('state_changed',()=>{
    const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;
  },
  function(error){
    console.log(val.error);
  },
  function(){
    storage.ref('documentos/'+arquivo.name).getDownloadURL().then((url)=>{
      db.collection('documentos').add({
        descricao: comprovanteText,
        arquivoURL: url
      })
    })

    alert('Sua solicitação foi enviada com sucesso!');
    formCliente.reset();
  }
  )
})

// Login with google...

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  /* Abrir modal do google para fazer login, add linha 17: const provider = new firebase.auth.GoogleAuthProvider(); */
  auth.signInWithPopup(provider);
})



// Puxar pedidos do firestore.

db.collection('documentos').onSnapshot((data)=>{
  let list = document.querySelector('.container-pedidos');
  list.innerHTML = "";
  data.docs.map((val)=>{
    list.innerHTML+=`
      <div style="background-color:white;padding:20px;margin-bottom:20px;text-align:left" class="container-single-pedido">
        <p>Descrição:${val.data().descricao}</p>
        <p>Anexo:</p>
        <img style="max-width:250px;margin-top:10px;border-radius:10px" src="${val.data().arquivoURL}">
      </div>
      <hr>
    `
  })
})