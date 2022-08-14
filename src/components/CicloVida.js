import React, { Component } from 'react'

/*RELOJ DIGITAL*/

class Reloj extends Component{
    constructor(props){
        super(props);
    }

    componentWillUnmount(){}
    render(){
        return <h3>{this.props.hora}</h3>

        
    }
}


export default class CicloVida extends Component {
    constructor(props){
        super(props);

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        }

        this.temporizador = null;
    }

    componentDidMount(){}

    componentDidUpdate(prevProps, prevState){}

    componentWillUnmount(){}
   
    tictac = ()=>{
            this.temporizador= setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString(),
            });
        },1000);
    };

    iniciar = ()=>{
        this.tictac();
        this.setState({
            visible:true,
        })

    }

    detener = ()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible:false,
        })

    }

   
  render() {
    return (
    <div>
        
        <h2>Ciclo de Vida de componentes de Clase</h2>
        {this.state.visible&&<Reloj hora={this.state.hora}/>}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
        
    </div>
    )
  }
}
