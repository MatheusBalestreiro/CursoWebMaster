import { useEffect, useState } from 'react';
import {auth} from './firebase/firebase';

function Header(props){


  function abrirModalCriarConta(e){
    e.preventDefault();

    let modal = document.querySelector('.modalCriarConta');
    modal.style.display = "block";
  }
  
  function fecharModal(){
    let modal = document.querySelector('.modalCriarConta');
    modal.style.display = "none";
  }

  function criarConta(e){
    e.preventDefault();

    //Criar conta firebase;
    
  }

  return(
    <div className='header'>

        <div className='modalCriarConta'>
          <div className='formCriarConta'>
            <div onClick={fecharModal} className='closeModal'>X</div>
              <h2>Criar Conta</h2>
                <form onSubmit={(e)=>criarConta(e)}>
                  <input type='text' placeholder='Seu e-mail...'></input>
                  <input type='text' placeholder='Seu username'></input>
                  <input type='password' placeholder='Sua senha...'></input>
                  <input type='submit' name='acao' value="Enviar"></input>
                </form>
          </div>
        </div>

        <div className='center'>
          <div className='header__logo'>
            <a href=''><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img></a>
          </div>
          {
            (props.user)?
            <div className='header__logadoInfo'>
              <span>Olá, <b>{props.user}</b></span>
              <a href='#'>Postar!</a>
            </div>
            :
            <div className='header__loginForm'>
              <form>
                <input type='text' placeholder='Login...'></input>
                <input type='password' placeholder='Senha...'></input>
                <input type='submit' name='acao' value='Logar'></input>
              </form>
              <div className='btn__criarConta'>
                <a onClick={(e)=>abrirModalCriarConta(e)} href='#'>Criar conta</a>
              </div>
            </div>
          }
          
        </div>
      </div>
  )
}

export default Header;