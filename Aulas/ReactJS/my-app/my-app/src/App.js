import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function App() {
  const[nomes, setNomes] = useState([]);
 
  useEffect(() => {
    axios.get('https://jsonplaceholder.tyipcode.com/users').then(res =>{
      setNomes(res.data);
    })
  });
   
  return (
    <div>
      {
        nomes.map(function(data){
          return(
            <h2>{data.name}</h2>
          )
        })
      }
    </div>
  );
}

