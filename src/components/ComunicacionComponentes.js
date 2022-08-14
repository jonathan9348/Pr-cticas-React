import React, { Component } from 'react'

export default class Padre extends Component {
    state = {
        contador: 0,
    }

    incrementarContador = (e) =>{
        this.setState({
            contador: this.state.contador + 1,
    })
    }
  render() {
    return (
    <div>
        
        <h2>ComunicacionComponentes</h2>
        <p>{this.state.contador}</p>
        <Hijo incrementarContador = {this.incrementarContador} mensaje = "Mensaje para hijo 1"/>
        <Hijo mensaje = "Mensaje para hijo 2"/>
        
    </div>
    )
  }
}

function Hijo(props){
    return(
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarContador}>INCREMENTAR</button>
        
        </>
    )
}