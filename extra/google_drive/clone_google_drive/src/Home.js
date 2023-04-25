import React, {useState, useEffect} from 'react';
import './Home.css'
import { AiOutlinePlus, AiOutlineCloudDownload, AiFillFolder } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { db,storage, auth } from './firebase'

function Home(props){

  const[progress, setProgress] = useState(0);
  const[arquivos, setArquivos] = useState([]);

  useEffect(()=>{
    db.collection('drive').doc(props.login.uid).collection('files').onSnapshot((snapshot)=>{
        setArquivos(snapshot.docs.map(l=>{
            return l.data();
        }));
    })
},[props]);

  function sair(e){
    e.preventDefault();
    auth.signOut().then(() => {
      alert('Deslogado!');
      window.location.href="/";
    }).catch((error)=>{
      // An error happened.
    })
  }

  function fazerUploadArquivo(uid){
    let arquivo = document.querySelector('[name=arquivo]').files[0];

        const uploadTask = storage.ref('drive/'+arquivo.name).put(arquivo);
        uploadTask.on('state_changed',(snapshot)=>{
            const progressTemp = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;
            setProgress(progressTemp)
        },
        function(error){
        },
        function(){
            storage.ref('drive/'+arquivo.name).getDownloadURL().then((url)=>{
                db.collection('drive').doc(uid).collection('files').add({
                    arquivoURL: url,
                    tipo_arquivo: arquivo.type,
                    nome: arquivo.name
                })
            })
            alert('Upload realizado com sucesso!');
            setProgress(0);
        }
        )
  }

  return(
    <div className='home'>
      <div className='header'>
        <div className='header__logo'>
          <img src="https://kstatic.googleusercontent.com/files/f4b4fbcc6119576da7ab3f68270196009fc1b16f1927910842d793c385115593b6dd5fbe9a1e21fe64f3cbbc509c3a02c95ebc9635f76c355282482986f1fe7d"></img>
          <span>Drive</span>
        </div>
        <div className='header__pesquisa'>
          <input type='text' placeholder='O que você quer buscar ?'></input>
        </div>
        <div className='header__user'>
          <a onClick={(e)=>sair(e)} href='#'>
            <img src={props.login.imagem}></img>
          </a>
        </div>
      </div>

      <div className='main'>
        <div className='main__sidebar'>
          <form className='main__form'>
            <label className='main__btnFileSelect' for='arquivo'><AiOutlinePlus/>    Novo</label>
            <input onChange={()=>fazerUploadArquivo(props.login.uid)} id="arquivo" className='hidden-input' type='file' name='arquivo'></input>
          </form>
          <div className='main__folders'>
            <div className='main__folderMeuDrive'>
              <AiFillFolder/>
              <span>Meu Drive</span>
            </div>
            {
              (progress > 0)?
                <div className='progressBar'>
                  <label for="file"></label>
                  <progress id="file" value={progress} max="1"> {progress} </progress>
                </div>
              :
              <div></div>
            }
          </div>
        </div>

        <div className='main__content'>
          <div className='main__topoText'>
            <h2>Meu Drive</h2>
          </div>
          <div className='box__files'>
            {
              arquivos.map(function(data){
                return (
                  <div className='box__fileSingle'>
                    <a href={data.arquivoURL} target="_blank">
                      {data.nome}
                    </a>
                    <div className='iconDownload'>
                      <GrDocumentText />
                    </div>
                  </div>
                )
              })
            }
            
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;