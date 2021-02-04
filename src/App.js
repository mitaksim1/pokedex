import React, {useState, useEffect} from "react";
import api from "./api";
import styles from "./styles.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // Getting pokemons from the api
  useEffect(() => {
    api.get('pokemon?limit=10').then(response => {
      const allPokemons = response.data.results;
      // console.log(allPokemons);
      // Getting a single pokemon from the array
      allPokemons.forEach(function(pokemon) {
        let pokemonUrl = pokemon.url;
        // console.log(pokemonUrl);

        api.get(pokemonUrl).then(pokemonData => {
          console.log(pokemonData);
        })
      })
      // setPokemon(results);  
    }); 
  }, [pokemon]);

  
  return (
    <div className="App">
      <h1>Insira seu pokemon</h1>
      <div className="homepage">
      <form>
        <input />
        <button>Procurar</button>
      </form>
     
      </div>
    </div>
  );
}

export default App;
