import React, { Component } from 'react'
import data from '../components/helpers/data.json';

function ElementoLista(props){ //componente creado como ejemplo, se entiende que cada componente debe estar en un archivo separado
    return(
        <li>
            <a href={props.e.web}>{props.e.name}</a>
        </li>
    )
}


export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);

        this.state = {
            seasons: ["Verano", "Invierno", "Primavera", "Otoño"],
        }
    }
  render() {
    return (
    <div>
        
        <h2>RenderizadoElementos</h2>
       
       <ul>{this.state.seasons.map(e => (
       
       <li key={e}>{e}</li>
       
       ))}
       </ul> 
       <h3>Frameworks Frontend JavaScript</h3>
       <ul>
        {
            data.frameworks.map((e) => <ElementoLista key={e.id} e={e}/>)
        }
       </ul>
        
    </div>
    )
  }
}
