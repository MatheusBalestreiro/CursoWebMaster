import './App.css';
import React, {useEffect, useState} from 'react';
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { auth, provider } from './firebase';
import Home from './Home';



function App() {
  const [login, setLogin] = useState(null);

  useEffect(()=>{
    // Sistema de login persistente.
    auth.onAuthStateChanged((val)=>{
      setLogin({
        nome: val.displayName,
        email: val.email,
        imagem: val.photoURL,
        uid: val.uid
      });
    })
  },[])

  function handleLogin(e){
    e.preventDefault();
    auth.signInWithPopup(provider)
    .then(function(result){
      if(result){
        setLogin(result.user.email);
      }
    })
  }

  return (
    <div className="App">
      {(login)?(
        <Router>
          <Switch>
            <Route path="/home">
              <Home login={login}/>
            </Route>

            <Route path="/">
              <Home login={login}/>
            </Route>
            
          </Switch>
        </Router>
      ):
      <div className='login__page'>
        <div className='card shadow'>
          <div className='text__login'>
            Olá, <span>visitante</span>!
          </div>
          <a onClick={(e)=>handleLogin(e)} href='#'><img src='https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png'></img></a>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
