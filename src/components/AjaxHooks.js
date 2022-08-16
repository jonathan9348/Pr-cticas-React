import { Input } from 'postcss';
import React, {useEffect, useState} from 'react'

function Pokemon({avatar, name}){
    return(
        <figure>
            <img src= {avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{

        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
         .then((res) => res.json())
         .then((json) =>{
            json.results.forEach((el) =>{
                fetch(el.url)
                .then((res) => res.json())
                .then((json) =>{
                    let pokemon={
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default,
                    };

                    setPokemons((pokemons)=>[...pokemons, pokemon]);

                    
                });
            });
         })
    }, [Input])
    return (
        <div>
          <h2>Peticiones Asincronas en Hooks</h2>
          {pokemons.map(el => (
          <Pokemon key={el.id} 
          name={el.name} 
          avatar={el.avatar}/>
          ))}
        </div>
      )
}
