import Header from './Header';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[user, setUser] = useState();

  return (
    <div className="App">
      <Header user={user}/>
    </div>
  );
}

export default App;
