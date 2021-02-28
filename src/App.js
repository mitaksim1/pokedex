import React, {useState, useEffect} from "react";
import api from "./api";
import styles from "./styles.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // Getting pokemons from the api
  useEffect(() => {
    api.get('pokemon?limit=10').then(response => {
      //console.log(response);
      // Request's result
      let allPokemons = response.data.results;
      //console.log('allpokemons', allPokemons);

      // Getting a single pokemon from the array
      allPokemons.forEach(function(pokemon) {
        displayPokemon(pokemon); 
      });
      setPokemon(allPokemons);
      // console.log(allPokemons);  
    }); 
  }, []);

function displayPokemon(pokemon) {
  let pokemonUrl = pokemon.url;
    // console.log(pokemonUrl);
    api.get(pokemonUrl).then(pokemonData => {
      //console.log('pokemonData', pokemonData);
     
      const { name, types, sprites } = pokemonData.data;
      // console.log('pokemonData.data', pokemonData.data);
      /* console.log('Nome:', name);
      console.log('Type:', types[0]['type']['name']);
      console.log('id:', id);
      console.log('image:', sprites.front_default); */
      
      const pokemonList = {
        name,
        type: types[0]['type']['name'],
        image: sprites['front_default']
      }
      console.log('pokemonList', pokemonList)
      return pokemonList ; 
    });
}

  return (
    <div className="App">
      <h1>Insira seu pokemon</h1>
      <div className="homepage">
      <form>
        <input />
        <button>Procurar</button>
      </form>
      {pokemon.map(pokemonItem => (
        <div>
          <p>{pokemonItem.name}</p>  
          <p>{pokemonItem.type}</p>  
          <img src={pokemonItem.image} alt="pokemon image"/>
        </div>
      ))} 
      </div>
    </div>
  );
}

export default App;
