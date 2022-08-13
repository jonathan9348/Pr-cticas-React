import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Prácticas React 
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <section>
        <Componente  msg ="Hola soy un componente funcional"/>
        <hr/>
        <Propiedades 
        cadena = "Esto es una cadena de texto" 
        numero = {20}
        booleano = {true}
        arreglo = {[1, 2, 3]}
        objeto = {{nombre: "Jona", email: "jonathan.moran9348@gmail.com"}}
        funcion = {(num) => num*2}/>
        <Estado />
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
      </section>
      </header>
    </div>
  );
}

export default App;
