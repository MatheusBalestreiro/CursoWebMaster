import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { axios } from 'axios';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialStates = {count:22,title:'MatheusBales'};
function reducer(state= initialStates,action){
  {
    if(action.type =='alterarNumero'){
      return{count:state.count + 1,title:state.title}
    }
  }
  return state;
}

const store = createStore(reducer);


const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
