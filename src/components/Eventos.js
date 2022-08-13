import React, { Component } from 'react'

export default class Eventos extends Component {


        state = {
            contador: 0,
        }


        sumar = (e) => {
            console.log("sumando")
             this.setState({
             contador: this.state.contador + 1,
        });
    }

        restar = (e) => {
            console.log("restando")
            this.setState({
            contador: this.state.contador - 1
        })
    }
  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
        </nav>
      </div>
    )
  }
}
