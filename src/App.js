import React from "react";
import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
      </section>
      </header>
    </div>
  );
}

export default App;
