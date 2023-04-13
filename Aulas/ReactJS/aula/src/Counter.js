import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class Counter extends React.Component{
 
  alterarNumero = ()=>{
      //TODO: Chamar função para incrementar no próprio redux.
      this.props.dispatch({'type':'alterarNumero','count':90});
  }

  alterarTitulo = ()=>{
   //TODO: Chamar função para alterar título no próprio redux.
   this.props.dispatch({});
  }

  render(){
    return(
      <div>
        <button onClick={this.alterarTitulo}>+</button>
        <button onClick={this.alterarNumero}>-</button>
        <h2>{this.props.count}</h2>
        <h3>{this.props.title}</h3>
      </div>
    )
  }

}

const mapStateToProps = state => ({count:state.count,title:state.title})

export default connect(mapStateToProps)(Counter);