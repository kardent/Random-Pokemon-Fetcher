import React, { useState, useEffect } from 'react';
import './App.css';

function Example() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState("Loading...");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setPokemon("Loading")
    fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/')
    .then(function(data){
      return data.json();
    })
    .then(function(data){
      console.log(data)
      setPokemon(data);
    })
  }, [id]);
  
  return (
    <div className="container">
      <button onClick={() => setId(Math.floor(Math.random() * 200))}>
        Random Pokemon
      </button>
      <div className="well">
        <div className="general">
          <h2>{pokemon.name}</h2>
          
          {pokemon && pokemon.sprites && 
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          }
        </div>
        <div className="abilities">
          <h3>Abilities</h3>
          {pokemon && pokemon.abilities && 
            pokemon.abilities.map((ability) =>
              <p className="flex" key={ability.ability.name}>{ability.ability.name}</p>
            )
          }
        </div>
        </div>

        <div className="moves">
          <h3>Moves</h3>
          {pokemon && pokemon.moves && 
            pokemon.moves.map((move) =>
              <p className="flex" key={move.move.name}>{move.move.name}</p>
            )
          }
      </div>
    </div>
  );
}

export default Example;